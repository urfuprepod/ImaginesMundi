import { useState } from "react";
import { formatCellValue } from "./formatCellValue";

type ListCellViewProps = {
    items: unknown[];
    template: string;
};

const PREVIEW_LIMIT = 3;

const ListCellView = ({ items }: ListCellViewProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hiddenCount = items.length - PREVIEW_LIMIT;
    const visibleItems = isExpanded ? items : items.slice(0, PREVIEW_LIMIT);

    if (items.length === 0) return null;

    return (
        <>
            <ul className="list-disc pl-5">
                {visibleItems.map((item, index) => (
                    <li key={index}>{formatCellValue(item)}</li>
                ))}
            </ul>
            {hiddenCount > 0 && (
                <button
                    type="button"
                    aria-expanded={isExpanded}
                    className="cursor-pointer text-link hover:underline"
                    onClick={() => setIsExpanded(expanded => !expanded)}
                >
                    {isExpanded ? "Скрыть" : `Показать больше (${hiddenCount})`}
                </button>
            )}
        </>
    );
};

export default ListCellView;
