import Editor, { type BeforeMount } from "@monaco-editor/react";
import { useState } from "react";

const MonacoEditor = () => {
    const [value, setValue] = useState('{\n  "name": "John"\n}');

    const handleBeforeMount: BeforeMount = (monaco) => {
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            allowComments: false,
            trailingCommas: "error",
        });
    };

    return (
        <Editor
            height="400px"
            language="json"
            value={value}
            onChange={(value) => setValue(value ?? "")}
            beforeMount={handleBeforeMount}
            onValidate={(markers) => {
                console.log("Ошибки:", markers);
            }}
            options={{
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                tabSize: 2,
                insertSpaces: true,
                wordWrap: "on",
                scrollBeyondLastLine: false,
                formatOnPaste: true,
                formatOnType: true,
                quickSuggestions: true,
                folding: true,
                lineNumbers: "on",
            }}
        />
    );
};

export default MonacoEditor;
