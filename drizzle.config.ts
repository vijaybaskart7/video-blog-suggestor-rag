import { defineConfig } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing required environment variable: DATABASE_URL");
}

export default defineConfig({
  out: "./app/db/migrations",
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
