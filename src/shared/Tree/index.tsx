import { type FC } from "react";
import { ChevronDown, Folder } from "lucide-react";
import clsx from "clsx";
import { TREE_ITEM_CLASSNAME } from "./constants";

export type TreeItem = {
    id: string;
    title: string;
    children?: TreeItem[];
};

type Props = {
    items: TreeItem[];
    expandedIds: string[];
    activeId: string | null;
    onExpandedIdsChange: (ids: string[]) => void;
    onActiveIdChange: (id: string | null) => void;
};

export type TreeProps = Props;

const Tree: FC<Props> = ({
    items,
    expandedIds,
    activeId,
    onExpandedIdsChange,
    onActiveIdChange,
}) => {
    const renderItems = (nodes: TreeItem[]) =>
        nodes.map((item) => {
            const isFolder = item.children !== undefined;
            const isExpanded = expandedIds.includes(item.id);
            const isActive = !isFolder && activeId === item.id;

            const handleClick = () => {
                if (isFolder) {
                    onExpandedIdsChange(
                        isExpanded
                            ? expandedIds.filter((id) => id !== item.id)
                            : [...expandedIds, item.id],
                    );
                    return;
                }

                onActiveIdChange(item.id);
            };

            return (
                <li key={item.id}>
                    <button
                        type="button"
                        onClick={handleClick}
                        className={clsx(TREE_ITEM_CLASSNAME, {
                            "bg-sky-100 text-sky-800": isActive,
                            "text-text-primary hover:bg-slate-100": !isActive,
                        })}
                    >
                        {isFolder && (
                            <Folder
                                size={18}
                                className="shrink-0 text-system"
                            />
                        )}
                        <span className="min-w-0 flex-1 break-words">
                            {item.title}
                        </span>
                        {isFolder && (
                            <ChevronDown
                                size={16}
                                className={clsx(
                                    "shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none",
                                    { "rotate-180": isExpanded },
                                )}
                            />
                        )}
                    </button>
                    {item.children !== undefined && (
                        <ul
                            hidden={!isExpanded}
                            className="ml-5 border-l border-slate-200 pl-3"
                        >
                            {renderItems(item.children)}
                        </ul>
                    )}
                </li>
            );
        });

    return <ul>{renderItems(items)}</ul>;
};

export default Tree;
