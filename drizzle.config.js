import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://ai_owner:npg_RKZxAGnk8JN7@ep-bitter-paper-a5pu827q.us-east-2.aws.neon.tech/ai?sslmode=require'
  }
});
