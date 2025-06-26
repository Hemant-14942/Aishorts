// configs/schema.js
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("Users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  imageUrl: varchar("imageUrl", { length: 400 }),
  subscription: varchar("subscription", { length: 100 }).default("free"),
});

// 👇 Important: Default export as object
export default {
  Users ,
};
