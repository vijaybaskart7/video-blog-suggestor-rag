import { integer, pgTable, snakeCase, varchar } from "drizzle-orm/pg-core";

export const usersTable = snakeCase.table("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
});
