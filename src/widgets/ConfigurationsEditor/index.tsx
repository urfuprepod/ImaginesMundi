import Editor, { type BeforeMount } from "@monaco-editor/react";
import type { TreeItem } from "@shared";
import { useConfiguration } from "@store";
import { useMemo, useState } from "react";
import type { IFile } from "@types";

const JsonEditorWithFolders = () => {
    const files: IFile[] = [];

    const filesToTree = useMemo<TreeItem[]>(() => {
        const filesTreeMap = new Map<string, TreeItem>();
        files.forEach(({ id, name, folderName }) => {
            const parsedToTree = { id: String(id), title: name };
            const current = filesTreeMap.get(folderName);
            if (current) {
                filesTreeMap.set(folderName, {
                    ...current,
                    children: (current.children ?? []).concat(parsedToTree),
                });
            } else {
                filesTreeMap.set(folderName, {
                    id: String(filesTreeMap.size),
                    title: folderName,
                    children: [parsedToTree],
                });
            }
        });

        return Array.from(filesTreeMap.values());
    }, [files]);

    const { activeConfig } = useConfiguration();

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

export default JsonEditorWithFolders;
