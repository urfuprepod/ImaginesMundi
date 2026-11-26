import { Plus } from "lucide-react";

const addButtonClassName = `
    inline-flex cursor-pointer items-center gap-2 rounded-md border
    border-border/20 bg-white px-4 py-2 font-medium text-text-primary
    hover:bg-gg focus-visible:outline-2 focus-visible:outline-link
`;

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
