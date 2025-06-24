// configs/schema.js
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  imageURL: varchar("imageURL", { length: 100 }),
  subscription: varchar("subscription", { length: 100 }).default("free"),
});

// 👇 Important: Default export as object
export default {
  users,
};
