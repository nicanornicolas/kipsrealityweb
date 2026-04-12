import { PaymentFactory } from "../src/lib/payment/payment-factory";
import { KenyaPaymentStrategy } from "../src/lib/payment/strategies/kenya";
import { UsaPaymentStrategy } from "../src/lib/payment/strategies/usa";
import { Region } from "@prisma/client";

/**
 * Verify PaymentFactory routes to correct strategies.
 * 
 * Test keys are loaded from environment (.env.test or .env.test.local).
 * Ensures payment provider configuration is properly isolated.
 */

async function verifyPaymentFactory() {
    console.log("Verifying PaymentFactory...");

    // Test KENYA
    const kenyaStrategy = PaymentFactory.getStrategy(Region.KEN);
    if (kenyaStrategy instanceof KenyaPaymentStrategy) {
        console.log("✅ Region.KEN returns KenyaPaymentStrategy");
    } else {
        console.error("❌ Region.KEN failed to return KenyaPaymentStrategy");
    }

    // Test USA
    const usaStrategy = PaymentFactory.getStrategy(Region.USA);
    if (usaStrategy instanceof UsaPaymentStrategy) {
        console.log("✅ Region.USA returns UsaPaymentStrategy");
    } else {
        console.error("❌ Region.USA failed to return UsaPaymentStrategy");
    }

    console.log("PaymentFactory verification complete.");
}

verifyPaymentFactory().catch((e) => {
    console.error(e);
    process.exit(1);
});
