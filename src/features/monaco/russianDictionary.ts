import z from "zod";
import { BaseSchema } from "./base";

export const RussianDictionarySchema = BaseSchema.extend({
    type: z.literal("russian"),
    dictionary: z.record(z.string(), z.string()),
});
