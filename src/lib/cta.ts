
import { prisma } from "@rentflow/iam";

export async function fetchCTAs(page: string = "home") {
    try {
        const ctas = await prisma.cTA.findMany({
            where: { page },
        });
        return ctas;
    } catch (error) {
        console.error("Error fetching CTAs:", error);
        return [];
    }
}

