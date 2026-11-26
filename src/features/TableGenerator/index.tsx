import { useMemo } from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";
import type { TableFormConfig } from "../monaco";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../shared/ui/table";
import TableCellContent from "./TableCell";

type RowData = Record<string, unknown>;

type TableGeneratorProps = {
    columns: TableFormConfig["columns"];
    data: RowData[];
};

const TableGenerator = ({ columns, data }: TableGeneratorProps) => {
    const columnDefs = useMemo<ColumnDef<RowData>[]>(() =>
        columns.map(({ id, label, settings }) => ({
            id,
            header: label,
            accessorFn: row => row[id],
            cell: ({ getValue }) => <TableCellContent value={getValue()} settings={settings} />,
        })),
    [columns]);

    const table = useReactTable({
        columns: columnDefs,
        data,
        getCoreRowModel: getCoreRowModel(),
    });
    const { rows } = table.getRowModel();

    if (columns.length === 0) return <p>Колонки таблицы не настроены.</p>;

    return (
        <Table>
            <TableHeader className="bg-gg">
                {table.getHeaderGroups().map(group => (
                    <TableRow key={group.id}>
                        {group.headers.map(header => (
                            <TableHead key={header.id} scope="col">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                {rows.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={columns.length}>Нет данных.</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default TableGenerator;
