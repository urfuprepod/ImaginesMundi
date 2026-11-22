import z from "zod";
import { PartnerSchema } from "./partnersList";

export const HomeContentConfigSchema = z.object({
    partners: z.array(PartnerSchema),
    redactor: z.object({
        avatarUrl: z.string(),
        name: z.string(),
        biographyLink: z.string(),
    }),
    magazineInfo: z.object({
        title: z.string(),
        content: z.string(),
    }),
    series: z.object({
        avatarUrl: z.string(),
        title: z.string(),
        description: z.string(),
    }),
});
