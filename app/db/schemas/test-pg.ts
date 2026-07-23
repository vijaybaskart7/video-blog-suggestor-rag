const { Client } = require("pg");

const client = new Client({
  host: "ep-summer-feather-aych79ud-pooler.c-5.us-east-2.aws.neon.tech",
  port: 5432,
  database: "neondb",
  user: "neondb_owner",
  password: "<your-real-password>",
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
});

(async () => {
  try {
    await client.connect();
    console.log("Connected!");
    console.log(await client.query("select now()"));
  } catch (e) {
    console.error(e);
  } finally {
    await client.end().catch(() => {});
  }
})();
