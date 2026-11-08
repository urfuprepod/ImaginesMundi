import { EditorContent } from "@tiptap/react";
import clsx from "clsx";
import { useTextEditor } from "./useTextEditor";

const TextEditor = () => {
    const { editor, actions } = useTextEditor();

    return (
        <section className="flex min-w-0 flex-col gap-4">
            <h2 className="text-h2">Текстовый редактор</h2>
            <p className="text-paragraph text-slate-500">
                Черновик хранится только в открытом редакторе. Сохранение пока не подключено.
            </p>
            <div className="overflow-hidden rounded-md border border-slate-300">
                <div role="group" aria-label="Форматирование текста" className="flex flex-wrap gap-2 border-b border-slate-300 bg-slate-50 p-3">
                    {actions.map(({ label, active, disabled, run }) => (
                        <button
                            key={label}
                            type="button"
                            aria-pressed={active}
                            disabled={!editor || disabled}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={run}
                            className={clsx(
                                "rounded border px-3 py-2 text-[1.4rem] focus-visible:outline-2 focus-visible:outline-system disabled:cursor-not-allowed disabled:opacity-40",
                                active ? "border-system bg-system text-white" : "border-slate-300 bg-white hover:bg-slate-100",
                            )}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <EditorContent editor={editor} />
            </div>
        </section>
    );
};

export default TextEditor;
