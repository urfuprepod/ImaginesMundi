import z from "zod";
import { BaseSchema } from "./base";

export const PartnerSchema = BaseSchema.extend({
    logo: z.string(),
    name: z.string(),
    link: z.string(),
});

export const PartnersListSchema = BaseSchema.extend({
    type: z.literal("partners"),
    partners: z.array(PartnerSchema),
});
