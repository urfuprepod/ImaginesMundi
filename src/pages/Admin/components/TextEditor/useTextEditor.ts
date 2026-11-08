import { useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const useTextEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit.configure({ heading: { levels: [2, 3] } })],
        content: "<p></p>",
        editorProps: {
            attributes: {
                role: "textbox",
                "aria-label": "Текст документа",
                "aria-multiline": "true",
                class: "min-h-[40rem] p-6 outline-none text-paragraph [&_p]:my-3 [&_h2]:text-h2 [&_h2]:my-6 [&_h3]:text-h3 [&_h3]:my-4 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-8 [&_ol]:pl-8",
            },
        },
    });

    const state = useEditorState({
        editor,
        selector: ({ editor }) => ({
            paragraph: editor?.isActive("paragraph") ?? false,
            heading2: editor?.isActive("heading", { level: 2 }) ?? false,
            heading3: editor?.isActive("heading", { level: 3 }) ?? false,
            bold: editor?.isActive("bold") ?? false,
            italic: editor?.isActive("italic") ?? false,
            bulletList: editor?.isActive("bulletList") ?? false,
            orderedList: editor?.isActive("orderedList") ?? false,
            canUndo: editor?.can().undo() ?? false,
            canRedo: editor?.can().redo() ?? false,
        }),
    });

    const actions = [
        { label: "Абзац", active: state?.paragraph, run: () => editor?.chain().focus().setParagraph().run() },
        { label: "Заголовок 2", active: state?.heading2, run: () => editor?.chain().focus().toggleHeading({ level: 2 }).run() },
        { label: "Заголовок 3", active: state?.heading3, run: () => editor?.chain().focus().toggleHeading({ level: 3 }).run() },
        { label: "Жирный", active: state?.bold, run: () => editor?.chain().focus().toggleBold().run() },
        { label: "Курсив", active: state?.italic, run: () => editor?.chain().focus().toggleItalic().run() },
        { label: "Маркированный список", active: state?.bulletList, run: () => editor?.chain().focus().toggleBulletList().run() },
        { label: "Нумерованный список", active: state?.orderedList, run: () => editor?.chain().focus().toggleOrderedList().run() },
        { label: "Отменить", disabled: !state?.canUndo, run: () => editor?.chain().focus().undo().run() },
        { label: "Повторить", disabled: !state?.canRedo, run: () => editor?.chain().focus().redo().run() },
    ];

    return { editor, actions };
};
