import z from "zod";

const formFieldBaseSchema = z.object({
    required: z.boolean(),
    label: z.string(),
    name: z.string(),
});

const textFieldSchema = formFieldBaseSchema.extend({
    type: z.literal("text"),
    props: z.object({
        placeholder: z.string().optional(),
    }).optional(),
});

type FormFieldConfig = z.infer<typeof textFieldSchema> | (
    z.infer<typeof formFieldBaseSchema> & {
        type: "repeater";
        props: { fields: FormFieldConfig[] };
    }
);

const formFieldSchema: z.ZodType<FormFieldConfig> = z.discriminatedUnion("type", [
    textFieldSchema,
    formFieldBaseSchema.extend({
        type: z.literal("repeater"),
        props: z.object({
            get fields(): z.ZodArray<z.ZodType<FormFieldConfig>> {
                return z.array(formFieldSchema);
            },
        }),
    }),
]);

export const FormConfigSchema = z.object({
    title: z.string(),
    type: z.literal("form"),
    fields: z.array(formFieldSchema),
    actions: z.array(
        z.object({
            text: z.string(),
            method: z.enum(["PUT", "PATCH"]),
            link: z.string(),
        }),
    ),
});

export const TableFormConfigSchema = z.object({
    title: z.string(),
    type: z.literal("table_form"),
    columns: z.array(
        z.object({
            label: z.string(),
            id: z.string(),
            settings: z.object({
                type: z.literal("array"),
                template: z.string(),
            }).optional(),
        }),
    ),
    actions: z.object({
        data: z.string(),
    }),
    links: z.object({
        form_create: z.string(),
        form_edit: z.string(),
    }),
});
