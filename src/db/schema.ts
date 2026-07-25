import { pgTable, serial, text, integer, boolean, timestamp, numeric } from "drizzle-orm/pg-core";

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // e.g. "momo", "grill", "curry", "sides", "drinks"
  nameEn: text("name_en").notNull(),
  namePt: text("name_pt").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => menuCategories.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  descriptionEn: text("description_en").notNull().default(""),
  descriptionPt: text("description_pt").notNull().default(""),
  priceEuros: numeric("price_euros", { precision: 6, scale: 2 }).notNull(),
  isVeg: boolean("is_veg").notNull().default(false),
  isSpicy: boolean("is_spicy").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(), // YYYY-MM-DD
  time: text("time").notNull(), // HH:MM
  guests: integer("guests").notNull(),
  seating: text("seating").notNull(),
  notes: text("notes").notNull().default(""),
  status: text("status").notNull().default("pending"), // pending | confirmed | declined
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
