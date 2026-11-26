import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormGenerator } from "../../features";
import TableView, { tableDataQueryKey } from "../TableView";
import { useTableFormConfig } from "./useTableFormConfig";

type TableFormProps = {
    instanceId: string;
};

const TableForm = ({ instanceId }: TableFormProps) => {
    const [openForInstance, setOpenForInstance] = useState<string | null>(null);
    const queryClient = useQueryClient();
    const { data, isPending, isError } = useTableFormConfig(instanceId);

    if (!instanceId.trim() || isError) return <p role="alert">Не удалось загрузить конфигурацию таблицы.</p>;
    if (isPending) return <p role="status">Загрузка конфигурации таблицы…</p>;

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-end">
                <button
                    type="button"
                    className="cursor-pointer rounded-md border border-border/20 bg-white px-4 py-2 font-medium text-text-primary hover:bg-gg focus-visible:outline-2 focus-visible:outline-link"
                    onClick={() => setOpenForInstance(instanceId)}
                >
                    Добавить
                </button>
            </div>
            <TableView config={data.table} />
            <FormGenerator
                key={instanceId}
                config={data.form_create}
                isOpen={openForInstance === instanceId}
                onClose={() => setOpenForInstance(null)}
                onSaved={() => {
                    void queryClient.invalidateQueries({ queryKey: tableDataQueryKey(data.table.actions.data) });
                }}
            />
        </div>
    );
};

export default TableForm;
