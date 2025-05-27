import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations:{
    table:"__drizzle_migrations",
    schema:"public",
  },
  verbose: true, 
  strict: true,
});
