import { Plus } from "lucide-react";
import { addButtonClassName } from "./constants";

type TableFormHeaderProps = {
    onAdd: () => void;
};

const TableFormHeader = ({ onAdd }: TableFormHeaderProps) => (
    <div className="flex justify-end">
        <button
            type="button"
            className={addButtonClassName}
            onClick={onAdd}
        >
            <Plus size={20} aria-hidden="true" />
            Добавить
        </button>
    </div>
);

export default TableFormHeader;
