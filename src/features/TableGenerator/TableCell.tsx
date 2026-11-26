import type { TableFormConfig } from "../monaco";
import ListCellView from "./ListCellView";
import { formatCellValue } from "./formatCellValue";

type TableCellProps = {
    value: unknown;
    settings?: TableFormConfig["columns"][number]["settings"];
};

const TableCell = ({ value, settings }: TableCellProps) => {
    if (settings?.type === "array" && Array.isArray(value)) {
        return <ListCellView items={value} template={settings.template} />;
    }

    return formatCellValue(value);
};

export default TableCell;
