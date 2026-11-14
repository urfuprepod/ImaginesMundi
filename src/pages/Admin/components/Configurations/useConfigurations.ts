import { useState } from "react";
import type { OnValidate } from "@monaco-editor/react";
import type { TreeItem } from "@shared";
import { configurationFolders } from "./mockConfigurations";

const files = configurationFolders.flatMap(({ files }) => files);
const treeItems: TreeItem[] = configurationFolders.map(({ id, title, files }) => ({
    id,
    title,
    children: files.map(({ id, name }) => ({ id, title: name })),
}));

export const useConfigurations = () => {
    const [activeId, setActiveId] = useState<string | null>(files[0]?.id ?? null);
    const [expandedIds, setExpandedIds] = useState(configurationFolders.map(({ id }) => id));
    const [drafts, setDrafts] = useState<Record<string, string>>(() =>
        Object.fromEntries(files.map(({ id, content }) => [id, content])),
    );
    const [markerCounts, setMarkerCounts] = useState<Record<string, number>>({});

    const activeFile = files.find(({ id }) => id === activeId);
    const activeFolder = configurationFolders.find(({ files }) => files.some(({ id }) => id === activeId));
    const content = activeFile ? drafts[activeFile.id] : "";

    const handleContentChange = (value: string) => {
        if (!activeFile) return;
        setDrafts(previous => ({ ...previous, [activeFile.id]: value }));
    };

    const handleValidate: OnValidate = (markers) => {
        if (!activeFile) return;
        setMarkerCounts(previous => ({ ...previous, [activeFile.id]: markers.length }));
    };

    return {
        treeItems,
        activeId,
        expandedIds,
        activeFile,
        folderTitle: activeFolder?.title,
        content,
        isDirty: !!activeFile && content !== activeFile.content,
        markerCount: activeFile ? markerCounts[activeFile.id] ?? 0 : 0,
        handleActiveIdChange: setActiveId,
        handleExpandedIdsChange: setExpandedIds,
        handleContentChange,
        handleValidate,
    };
};
