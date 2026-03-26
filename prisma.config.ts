import { config } from "dotenv";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" });
} else {
  config({ path: ".env.local" });
  config();
}
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
