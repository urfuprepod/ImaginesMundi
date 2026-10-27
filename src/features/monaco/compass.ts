import z from "zod";
import { BaseSchema } from "./base";

export const CompassCardSchema = BaseSchema.extend({
    title: z.string(),
    description: z.string(),
    href: z.string(),
    linkLabel: z.string(),
    icon: z.enum(["ship", "university", "church", "columns"]),
});

export const CompassSchema = BaseSchema.extend({
    type: z.literal("compass"),
    items: z.array(CompassCardSchema),
});
