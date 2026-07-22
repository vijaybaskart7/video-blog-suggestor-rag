// Make sure to install the '@neondatabase/serverless' package

import { drizzle } from "drizzle-orm/neon-http";
import { serverEnv } from "../data/serverEnv";
import { userRelations } from "./relation";

export const db = drizzle(serverEnv.DATABASE_URL, { relations: userRelations });
