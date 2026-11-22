import z from "zod";

export const StoredFileSchema = z.object({
    name: z.string(),
    path: z.string(),
    extension: z.string(),
    size: z.int().nonnegative(),
    categoryId: z.string(),
});
