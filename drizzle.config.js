/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mockDb_owner:xjOcne3XWyL2@ep-patient-bush-a11uwnrj.ap-southeast-1.aws.neon.tech/mockDb?sslmode=require',
    }
  };
  