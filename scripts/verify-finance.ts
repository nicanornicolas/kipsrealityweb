import { setupFinancials, journalService, CHART_OF_ACCOUNTS } from "@rentflow/finance";
import { prisma } from "@rentflow/iam";

async function main() {
    try {
        console.log("🚀 Starting Financial Core Verification...");

        // 1. Mock an Org (Get the first one found)
        const org = await prisma.organization.findFirst();
        if (!org) {
            console.error("❌ No Organization found in DB. Please create one first.");
            return;
        }
        console.log(`✅ Found Org: ${org.name} (${org.id})`);

        // 2. Run Setup
        let entity = await prisma.financialEntity.findFirst({ where: { organizationId: org.id } });
        if (!entity) {
            console.log("⚙️ Setting up financials...");
            entity = await setupFinancials(org.id, org.name);
            console.log("✅ Financial Entity created.");
        } else {
            console.log("✅ Financial Entity already exists.");
        }

        // 3. Try Posting a BALANCED Entry (Should Success)
        console.log("📝 Attempting BALANCED entry...");
        const successEntry = await journalService.postJournalEntry({
            organizationId: org.id,
            date: new Date(),
            description: "Test Rent Payment (Script)",
            reference: "TEST-SCRIPT-001",
            lines: [
                { accountCode: CHART_OF_ACCOUNTS.CASH_IN_BANK, debit: 100, credit: 0 },
                { accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE, debit: 0, credit: 100 }
            ]
        });
        console.log(`✅ Success! Entry ID: ${successEntry.journalEntryId}`);

        // 4. Try Posting an UNBALANCED Entry (Should Fail)
        console.log("🛑 Attempting UNBALANCED entry (Expect Failure)...");
        try {
            await journalService.postJournalEntry({
                organizationId: org.id,
                date: new Date(),
                description: "Fraud Attempt (Script)",
                lines: [
                    { accountCode: CHART_OF_ACCOUNTS.CASH_IN_BANK, debit: 100, credit: 0 },
                    { accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE, debit: 0, credit: 50 }
                ]
            });
            console.error("❌ FAILURE: Unbalanced entry was ALLOWED! (This is bad)");
        } catch (e: any) {
            console.log("✅ Success! Validation blocked the entry.");
            console.log(`   Error message: ${e.message}`);
        }

        console.log("🎉 Verification Complete!");

    } catch (error: any) {
        console.error("❌ Script Error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
