import { db } from "@/app/db/db";
import { sql } from "drizzle-orm";

async function main() {
  const result = await db.execute(sql`select now()`);
  console.log(result);
}

main().catch(console.error);
