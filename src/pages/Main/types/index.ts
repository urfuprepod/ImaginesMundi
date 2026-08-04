import { callWarning, isObject } from "@/utils";
import z from "zod";

const POINTS = ["partners", "redactor", "content", "magazines"] as const;

const PartnerSchema = z.object({
    logo: z.string(),
    name: z.string(),
    link: z.string(),
});

export type Partner = z.infer<typeof PartnerSchema>;

const MainPageSchema = z.object({
    layout: z.record(
        z.enum(POINTS),
        z.object({ order: z.number(), flex: z.number().optional() }),
    ),
    partners: z.object({
        title: z.string(),
        items: z.array(PartnerSchema),
    }),
});

export type MainPage = z.infer<typeof MainPageSchema>;

export const isMainPage = (data: unknown): data is MainPage => {
    if (!isObject(data)) return false;
    try {
        MainPageSchema.parse(data);
        return true;
    } catch (err) {
        callWarning("Ошибка схемы главной страницы, проверьте конфигурацию");
        return false;
    }
};
