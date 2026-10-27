import { callWarning, isObject } from "@utils";
import z from "zod";
import { BaseSchema, PartnerSchema } from "../../../features/monaco";

const POINTS = ["partners", "redactor", "content", "magazines"] as const;

const MainPageSchema = BaseSchema.extend({
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
