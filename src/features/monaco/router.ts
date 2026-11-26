import z from "zod";

export const RouterConfigSchema = z.array(
    z.object({
        label: z.string(),
        path: z.string(),
        type: z.enum(["Main", "Admin", "Article", "TableForm"]),
        roles: z.array(z.string()).optional(),
    }),
);
