import { useState } from "react";
import TableView, { tableDataQueryKey } from "../TableView";
import TableFormHeader from "./TableFormHeader";
import TableFormModal from "./TableFormModal";
import { useTableFormConfig } from "./useTableFormConfig";

type TableFormProps = {
    instanceId: string;
};

const TableForm = ({ instanceId }: TableFormProps) => {
    const [openForInstance, setOpenForInstance] = useState<string | null>(null);
    const { data, isPending, isError } = useTableFormConfig(instanceId);

    if (!instanceId.trim() || isError)
        return <p role="alert">Не удалось загрузить конфигурацию таблицы.</p>;
    if (isPending) return <p role="status">Загрузка конфигурации таблицы…</p>;

    const closeForm = () => setOpenForInstance(null);

    return (
        <div className="flex flex-col gap-4">
            <TableFormHeader onAdd={() => setOpenForInstance(instanceId)} />
            <TableView config={data.table} />
            <TableFormModal
                key={instanceId}
                config={data.form_create}
                dataKey={tableDataQueryKey(data.table.actions.data)}
                isOpen={openForInstance === instanceId}
                onClose={closeForm}
            />
        </div>
    );
};

export default TableForm;
