import z from "zod";

// Основа существующих и новых схем конфигурации.
export const BaseSchema = z.object({
    id: z.string(),
});
