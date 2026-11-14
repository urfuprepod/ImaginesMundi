import "./tinymce";
import { Editor } from "@tinymce/tinymce-react";
import { textEditorOptions } from "./options";
import { useId } from "react";
import { Typography } from "@shared";
import { useTextEditor } from "./useTextEditor";

const TextEditor = () => {
    const id = useId();
    const {
        titleField, content, handleContentChange, handleContentBlur,
        titleError, contentError, isSubmitting, handleSubmit,
    } = useTextEditor();

    return (
        <form noValidate onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-6">
            <Typography.H2>Создание страницы</Typography.H2>
            <div className="flex flex-col gap-3">
                <label htmlFor={`${id}-title`} className="text-paragraph">Заголовок страницы *</label>
                <input
                    {...titleField}
                    id={`${id}-title`}
                    type="text"
                    required
                    aria-invalid={!!titleError}
                    aria-describedby={titleError ? `${id}-title-error` : undefined}
                    placeholder="Введите заголовок страницы"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-paragraph outline-none focus:border-system focus:ring-1 focus:ring-system aria-invalid:border-red-600"
                />
                {titleError && <p id={`${id}-title-error`} className="text-paragraph text-red-600">{titleError}</p>}
            </div>
            <div className="flex min-w-0 flex-col gap-3">
                <label htmlFor={`${id}-content`} className="text-paragraph">Содержимое страницы *</label>
                <Editor
                    id={`${id}-content`}
                    licenseKey="gpl"
                    init={textEditorOptions}
                    value={content}
                    onEditorChange={handleContentChange}
                    onBlur={handleContentBlur}
                />
                {contentError && <p className="text-paragraph text-red-600">{contentError}</p>}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="self-start rounded-md bg-system px-6 py-3 text-paragraph text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-system disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isSubmitting ? "Создание…" : "Создать страницу"}
            </button>
        </form>
    );
};

export default TextEditor;
