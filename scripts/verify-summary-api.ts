import { prisma } from "@rentflow/iam";
import { Decimal } from "@prisma/client/runtime/library";

function getArgValue(flag: string) {
    const arg = process.argv.slice(2).find((a) => a.startsWith(`${flag}=`));
    return arg ? arg.slice(flag.length + 1) : undefined;
}

function parseNumberArg(flag: string): number | undefined {
    const raw = getArgValue(flag);
    if (!raw) return undefined;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : undefined;
}

async function resolveOrganizationId(): Promise<string | undefined> {
    const fromArg = getArgValue("--org-id");
    if (fromArg) return fromArg;

    const fromEnv = process.env.UAT_ORG_ID;
    if (fromEnv) return fromEnv;

    const entity = await prisma.financialEntity.findFirst({
        select: { organizationId: true },
    });

    return entity?.organizationId;
}

async function main() {
    const orgId = await resolveOrganizationId();

    if (!orgId) {
        console.error("❌ Could not resolve organizationId. Use --org-id=<ID> or set UAT_ORG_ID.");
        process.exit(1);
    }

    const expectedCash = parseNumberArg("--expected-cash");
    const expectedAr = parseNumberArg("--expected-ar");
    const expectedIncome = parseNumberArg("--expected-income");

    console.log("🔍 Verifying Financial Summary for Org:", orgId);

    const entity = await prisma.financialEntity.findFirst({
        where: { organizationId: orgId }
    });

    if (!entity) {
        console.error("❌ No Financial Entity found.");
        return;
    }

    // Revenue (4000)
    const incomeResult = await prisma.journalLine.aggregate({
        where: { account: { code: "4000", entityId: entity.id } },
        _sum: { credit: true, debit: true }
    });
    const totalIncome = (incomeResult._sum.credit || new Decimal(0)).minus(incomeResult._sum.debit || new Decimal(0));

    // AR (1100)
    const arResult = await prisma.journalLine.aggregate({
        where: { account: { code: "1100", entityId: entity.id } },
        _sum: { debit: true, credit: true }
    });
    const outstandingArrears = (arResult._sum.debit || new Decimal(0)).minus(arResult._sum.credit || new Decimal(0));

    // Cash (1000)
    const cashResult = await prisma.journalLine.aggregate({
        where: { account: { code: "1000", entityId: entity.id } },
        _sum: { debit: true, credit: true }
    });
    const cashCollected = (cashResult._sum.debit || new Decimal(0)).minus(cashResult._sum.credit || new Decimal(0));

    console.log("\n📊 Finance Summary Results:");
    console.log("---------------------------");
    console.log(`Cash (In Bank - 1000): ${cashCollected.toNumber()} USD`);
    console.log(`Arrears (Outstanding - 1100): ${outstandingArrears.toNumber()} USD`);
    console.log(`Income (Rental - 4000): ${totalIncome.toNumber()} USD`);
    console.log("---------------------------");

    let hasMismatch = false;
    const tolerance = 0.0001;

    if (typeof expectedCash === "number") {
        const ok = Math.abs(cashCollected.toNumber() - expectedCash) < tolerance;
        console.log(ok
            ? `✅ Cash matches expected (${expectedCash})`
            : `❌ Cash mismatch. expected=${expectedCash} actual=${cashCollected.toNumber()}`);
        hasMismatch = hasMismatch || !ok;
    }

    if (typeof expectedAr === "number") {
        const ok = Math.abs(outstandingArrears.toNumber() - expectedAr) < tolerance;
        console.log(ok
            ? `✅ AR matches expected (${expectedAr})`
            : `❌ AR mismatch. expected=${expectedAr} actual=${outstandingArrears.toNumber()}`);
        hasMismatch = hasMismatch || !ok;
    }

    if (typeof expectedIncome === "number") {
        const ok = Math.abs(totalIncome.toNumber() - expectedIncome) < tolerance;
        console.log(ok
            ? `✅ Income matches expected (${expectedIncome})`
            : `❌ Income mismatch. expected=${expectedIncome} actual=${totalIncome.toNumber()}`);
        hasMismatch = hasMismatch || !ok;
    }

    if (hasMismatch) {
        process.exitCode = 1;
    } else if (
        typeof expectedCash !== "number" &&
        typeof expectedAr !== "number" &&
        typeof expectedIncome !== "number"
    ) {
        console.log("ℹ️ No expected values provided. Printed live summary snapshot only.");
    }

    await prisma.$disconnect();
}

main().catch(async (error) => {
    console.error("❌ verify-summary-api failed:", error);
    await prisma.$disconnect();
    process.exit(1);
});
