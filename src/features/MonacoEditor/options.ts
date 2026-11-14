import type { BeforeMount, EditorProps } from "@monaco-editor/react";

const configuredInstances = new WeakSet<Parameters<BeforeMount>[0]>();

export const configureJsonEditor: BeforeMount = (monaco) => {
    if (configuredInstances.has(monaco)) return;

    const defaults = monaco.languages.json.jsonDefaults;
    defaults.setDiagnosticsOptions({
        ...defaults.diagnosticsOptions,
        validate: true,
        allowComments: false,
        trailingCommas: "error",
    });
    configuredInstances.add(monaco);
};

export const jsonEditorOptions: EditorProps["options"] = {
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
};
