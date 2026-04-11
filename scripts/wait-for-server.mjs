const MAX_ATTEMPTS = Number(process.env.WAIT_FOR_SERVER_ATTEMPTS || 30);
const DELAY_MS = Number(process.env.WAIT_FOR_SERVER_DELAY_MS || 2000);
const SERVER_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const HEALTH_URL = `${SERVER_URL.replace(/\/$/, "")}/api/health`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  console.log("Waiting for server to be ready...");

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    try {
      const response = await fetch(HEALTH_URL, { method: "GET" });
      if (response.ok) {
        console.log("Server is ready");
        return true;
      }
      console.log(
        `Server not ready (${response.status}), retrying... (${i + 1}/${MAX_ATTEMPTS})`
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(
        `Server not reachable: ${message} (${i + 1}/${MAX_ATTEMPTS})`
      );
    }

    await sleep(DELAY_MS);
  }

  throw new Error("Server failed to start after the configured wait period");
}

waitForServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
