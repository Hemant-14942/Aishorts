import { config } from "dotenv";
config();
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_c3Z5GolwJdnW@ep-quiet-cherry-a8cw7c4o-pooler.eastus2.azure.neon.tech/AI-SHORTS?sslmode=require',
  },
});
