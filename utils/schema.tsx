import { boolean } from "drizzle-orm/gel-core";
import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar("templateSlug").notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
});

// @ts-ignore
export const UserSubscription = pgTable('userSubscription', {
    id: serial('id').primaryKey(),
    email: varchar('email'),
    userName: varchar('userName'),
    active: boolean('active'),
    paymentId: varchar('paymentId'),
    joinDate: varchar('joinDate'),
});

