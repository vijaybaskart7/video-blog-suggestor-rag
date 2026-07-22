import { defineRelations } from "drizzle-orm";

import * as schema from "./schemas/test";

export const userRelations = defineRelations(schema);
