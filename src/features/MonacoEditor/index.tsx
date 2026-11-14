import Editor, { type EditorProps, type OnValidate } from "@monaco-editor/react";
import { configureJsonEditor, jsonEditorOptions } from "./options";

export type MonacoEditorProps = {
    value: string;
    path: string;
    onChange: (value: string) => void;
    onValidate?: OnValidate;
    height?: EditorProps["height"];
};

const MonacoEditor = ({ value, path, onChange, onValidate, height = "400px" }: MonacoEditorProps) => {

    return (
        <Editor
            height={height}
            language="json"
            path={path}
            value={value}
            onChange={(nextValue) => onChange(nextValue ?? "")}
            beforeMount={configureJsonEditor}
            onValidate={onValidate}
            saveViewState
            options={jsonEditorOptions}
        />
    );
};

export default MonacoEditor;
