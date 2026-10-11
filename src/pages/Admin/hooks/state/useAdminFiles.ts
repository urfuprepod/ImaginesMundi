import { create } from "zustand";

interface AdminFilesStore {
    files: any[];
    deleteFiles: (id: string | string[]) => void;
    addFiles: (items: any | any[]) => void;
    setFiles: (items: any[]) => void;
    activeFilesId: string[];
    makeFilesActive: (ids: string | string[]) => void;
    removeFilesFromActive: (ids: string[]) => void;
}

export const useAdminFiles = create<AdminFilesStore>()((set) => ({
    files: [],
    activeFilesId: [],
    setFiles: (files) => set({ files }),
    addFiles: (newFiles) =>
        set(({ files }) => ({ files: files.concat(newFiles) })),
    removeFilesFromActive: (removedIds) => {
        set(({ activeFilesId }) => ({
            activeFilesId: activeFilesId.filter(
                (el) => !removedIds.includes(el),
            ),
        }));
    },
    deleteFiles: (ids) =>
        set(({ files }) => {
            const allIds = Array.isArray(ids) ? ids : [ids];
            return { files: files.filter((el) => !allIds.includes(el.id)) };
        }),
    makeFilesActive: (ids) => {
        const activeFilesId = Array.isArray(ids) ? ids : [ids];
        set({ activeFilesId });
    },
}));
