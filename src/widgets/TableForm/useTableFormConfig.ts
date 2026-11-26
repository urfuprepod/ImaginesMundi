import { useQuery } from "@tanstack/react-query";
import { getConfig } from "../../entities/api";
import { FormConfigSchema, TableFormConfigSchema } from "../../features/monaco";
import type { FormConfig, TableFormConfig } from "../../features/monaco";

type LinkedForms = {
    [Key in keyof TableFormConfig["links"]]: FormConfig;
};

export type TableFormQueryResult = LinkedForms & {
    table: Omit<TableFormConfig, "links">;
};

export const useTableFormConfig = (instanceId: string) => {
    return useQuery({
        queryKey: ["table-form-config", instanceId],
        enabled: instanceId.trim().length > 0,
        queryFn: async ({ signal }): Promise<TableFormQueryResult> => {
            const config = await getConfig(instanceId, signal);
            const { links, ...table } = TableFormConfigSchema.parse(config);

            const formEntries = await Promise.all(
                Object.entries(links).map(async ([key, reference]) => {
                    const config = await getConfig(reference, signal);
                    return [key, FormConfigSchema.parse(config)];
                }),
            );

            const forms = Object.fromEntries(formEntries) as LinkedForms;
            return { ...forms, table };
        },
    });
};
