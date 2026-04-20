import { prisma } from "@rentflow/iam";

async function main() {
    console.log("Starting minimal DB test...");
    try {
        const org = await prisma.organization.findFirst();
        console.log("Found org:", org?.id);
    } catch (e) {
        console.error("Error:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
