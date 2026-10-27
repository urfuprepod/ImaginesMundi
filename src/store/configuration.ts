import { create } from "zustand";

export type ConfigurationState = {
    activeConfig?: string;
    activeFileId?: number;
};

type ConfigurationMethods = {
    cleanConfigurations: () => void;
    setConfigurations: (
        activeConfig: Required<ConfigurationState>["activeConfig"],
        activeFileId: Required<ConfigurationState>["activeFileId"],
    ) => void;
};

type ConfigurationStore = ConfigurationState & ConfigurationMethods;

const initialState: ConfigurationState = {
    activeConfig: undefined,
    activeFileId: undefined,
};

export const useConfiguration = create<ConfigurationStore>((set) => ({
    ...initialState,
    cleanConfigurations: () =>
        set({ activeConfig: undefined, activeFileId: undefined }),
    setConfigurations: (activeConfig, activeFileId) =>
        set({ activeConfig, activeFileId }),
}));
