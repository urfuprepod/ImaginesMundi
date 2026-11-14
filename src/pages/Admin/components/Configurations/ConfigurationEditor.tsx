import { ChevronRight, FileJson } from "lucide-react";
import type { OnValidate } from "@monaco-editor/react";
import { MonacoEditor } from "@features";

type Props = {
    file: { id: string; name: string };
    folderTitle?: string;
    content: string;
    isDirty: boolean;
    markerCount: number;
    onChange: (value: string) => void;
    onValidate: OnValidate;
};

const ConfigurationEditor = ({ file, folderTitle, content, isDirty, markerCount, onChange, onValidate }: Props) => {
    return (
        <>
            <div className="flex min-w-0 flex-wrap items-center gap-3 border-b border-slate-200 px-5 py-4 text-paragraph">
                <span className="text-slate-500">{folderTitle}</span>
                <ChevronRight size={16} className="shrink-0 text-slate-400" aria-hidden="true" />
                <FileJson size={18} className="shrink-0 text-system" aria-hidden="true" />
                <span className="min-w-0 break-words text-text-primary">{file.name}</span>
                <span className="ml-auto rounded bg-slate-100 px-3 py-1 text-slate-500">JSON</span>
            </div>
            <div className="min-h-0 flex-1">
                <MonacoEditor
                    path={`inmemory://imagines-mundi/configurations/${file.id}.json`}
                    value={content}
                    onChange={onChange}
                    onValidate={onValidate}
                    height="100%"
                />
            </div>
            <div aria-live="polite" className="flex flex-wrap justify-between gap-3 border-t border-slate-200 px-5 py-3 text-paragraph text-slate-500">
                <span>{isDirty ? "Есть изменения в черновике" : "Без изменений"}</span>
                <span>Замечания JSON: {markerCount}</span>
            </div>
        </>
    );
};

export default ConfigurationEditor;
