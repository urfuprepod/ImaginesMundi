import { create } from "zustand";

export type ConfirmModalOptions = {
    title: string;
    description: string;
    callback: () => void;
};

type ConfirmModalStore = {
    title: string;
    description: string;
    callback: (() => void) | null;
    isOpen: boolean;
    open: (options: ConfirmModalOptions) => void;
    close: () => void;
};

const initialState = {
    title: "",
    description: "",
    callback: null,
    isOpen: false,
};

export const useConfirmModal = create<ConfirmModalStore>((set) => ({
    ...initialState,
    open: ({ title, description, callback }) =>
        set({ title, description, callback, isOpen: true }),
    close: () => set(initialState),
}));
