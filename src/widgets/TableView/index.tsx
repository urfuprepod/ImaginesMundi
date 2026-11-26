import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import z from "zod";
import { TableGenerator } from "../../features";
import type { TableFormConfig } from "../../features/monaco";

type TableViewProps = {
    config: Pick<TableFormConfig, "columns" | "actions">;
};

const tableDataSchema = z.array(z.record(z.string(), z.unknown()));

export const tableDataQueryKey = (url: string) => ["table-data", url] as const;

const TableView = ({ config }: TableViewProps) => {
    const { actions: { data: dataUrl }, columns } = config;
    const { data, isPending, isError } = useQuery({
        queryKey: tableDataQueryKey(dataUrl),
        queryFn: async ({ signal }) => {
            const response = await axios.get<unknown>(dataUrl, { signal });
            return tableDataSchema.parse(response.data);
        },
    });

    if (isPending) return <p role="status">Загрузка данных таблицы…</p>;
    if (isError) return <p role="alert">Не удалось загрузить данные таблицы.</p>;

    return <TableGenerator columns={columns} data={data} />;
};

export default TableView;
