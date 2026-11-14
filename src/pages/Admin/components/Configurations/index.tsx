import { Folder } from "lucide-react";
import { Tree, Typography } from "@shared";
import { useConfigurations } from "./useConfigurations";
import ConfigurationEditor from "./ConfigurationEditor";
import ConfigurationEmptyState from "./ConfigurationEmptyState";

const Configurations = () => {
    const {
        treeItems, activeId, expandedIds, activeFile, folderTitle,
        content, isDirty, markerCount, handleActiveIdChange,
        handleExpandedIdsChange, handleContentChange, handleValidate,
    } = useConfigurations();

    return (
        <section className="flex min-w-0 flex-col gap-4">
            <Typography.H2>Конфигурации</Typography.H2>
            <Typography.Main className="text-slate-500">
                Демонстрационные конфиги. Изменения хранятся до перезагрузки страницы.
            </Typography.Main>
            <div className="grid min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white md:h-[60rem] md:grid-cols-[minmax(22rem,30rem)_minmax(0,1fr)]">
                <aside aria-label="Папки конфигураций" className="flex min-h-0 min-w-0 flex-col border-b border-slate-200 bg-slate-50 md:border-r md:border-b-0">
                    <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                        <Folder size={18} className="shrink-0 text-system" aria-hidden="true" />
                        <Typography.H5>Файлы конфигураций</Typography.H5>
                    </div>
                    <div className="max-h-[24rem] overflow-y-auto p-3 md:max-h-none md:flex-1">
                        <Tree
                            items={treeItems}
                            activeId={activeId}
                            expandedIds={expandedIds}
                            onActiveIdChange={handleActiveIdChange}
                            onExpandedIdsChange={handleExpandedIdsChange}
                        />
                    </div>
                </aside>
                <div className="flex h-[60rem] min-h-0 min-w-0 flex-col md:h-auto">
                    {activeFile ? (
                        <ConfigurationEditor
                            file={activeFile}
                            folderTitle={folderTitle}
                            content={content}
                            isDirty={isDirty}
                            markerCount={markerCount}
                            onChange={handleContentChange}
                            onValidate={handleValidate}
                        />
                    ) : (
                        <ConfigurationEmptyState />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Configurations;
