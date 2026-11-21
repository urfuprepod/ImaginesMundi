import z from "zod";

export const HomeSectionConfigSchema = z.array(
    z.object({
        type: z.enum(["redactor", "partners", "collections", "info"]),
        order: z.number(),
        flex: z.number(),
    }),
);
