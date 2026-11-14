import type { ComponentProps } from "react";
import type { Editor } from "@tinymce/tinymce-react";
import editorFontStyles from "./content.css?inline";
import contentStyles from "tinymce/skins/content/default/content.min.css?inline";
import contentUiStyles from "tinymce/skins/ui/oxide/content.min.css?inline";

export const textEditorOptions: NonNullable<ComponentProps<typeof Editor>["init"]> = {
    language: "ru",
    height: 480,
    menubar: false,
    promotion: false,
    toolbar_mode: "wrap",
    plugins: "lists advlist autolink link table charmap searchreplace fullscreen wordcount",
    toolbar: [
        "undo redo | blocks fontsizeinput | bold italic underline strikethrough | removeformat",
        "bullist numlist | blockquote link table charmap | alignleft aligncenter alignright alignjustify | outdent indent | searchreplace fullscreen",
    ],
    font_size_input_default_unit: "px",
    skin: false,
    content_css: false,
    content_style: `${contentStyles}\n${contentUiStyles}\n${editorFontStyles}`,
    placeholder: "Введите текст…",
    browser_spellcheck: true,
    link_default_target: "_blank",
    link_default_protocol: "https",
};
