import { ChevronRight, FileJson, Folder } from "lucide-react";
import { MonacoEditor } from "@features";
import { Tree, Typography } from "@shared";
import { useConfigurations } from "./useConfigurations";

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
                        <>
                            <div className="flex min-w-0 flex-wrap items-center gap-3 border-b border-slate-200 px-5 py-4 text-paragraph">
                                <span className="text-slate-500">{folderTitle}</span>
                                <ChevronRight size={16} className="shrink-0 text-slate-400" aria-hidden="true" />
                                <FileJson size={18} className="shrink-0 text-system" aria-hidden="true" />
                                <span className="min-w-0 break-words text-text-primary">{activeFile.name}</span>
                                <span className="ml-auto rounded bg-slate-100 px-3 py-1 text-slate-500">JSON</span>
                            </div>
                            <div className="min-h-0 flex-1">
                                <MonacoEditor
                                    path={`inmemory://imagines-mundi/configurations/${activeFile.id}.json`}
                                    value={content}
                                    onChange={handleContentChange}
                                    onValidate={handleValidate}
                                    height="100%"
                                />
                            </div>
                            <div aria-live="polite" className="flex flex-wrap justify-between gap-3 border-t border-slate-200 px-5 py-3 text-paragraph text-slate-500">
                                <span>{isDirty ? "Есть изменения в черновике" : "Без изменений"}</span>
                                <span>Замечания JSON: {markerCount}</span>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center p-8 text-center">
                            <Typography.Main className="text-slate-500">Выберите конфиг в списке слева</Typography.Main>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Configurations;
