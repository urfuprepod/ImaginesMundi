import type { FormConfig, TableFormConfig } from "../../features/monaco";

const mockConfigs: ReadonlyMap<string, TableFormConfig | FormConfig> = new Map([
    ["issues", {
        title: "Выпуски",
        type: "table_form",
        columns: [{ label: "Название", id: "title" }],
        actions: { data: "/api/issues" },
        links: { form_create: "issue-create", form_edit: "issue-edit" },
    }],
    ["issue-create", {
        title: "Добавить выпуск",
        type: "form",
        fields: [{ required: true, label: "Название", type: "text", name: "title" }],
        actions: [{ text: "Создать", method: "PUT", link: "/api/issues" }],
    }],
    ["issue-edit", {
        title: "Редактировать выпуск",
        type: "form",
        fields: [{ required: true, label: "Название", type: "text", name: "title" }],
        actions: [{ text: "Сохранить", method: "PATCH", link: "/api/issues/{id}" }],
    }],
]);

export const getConfig = async (name: string, signal?: AbortSignal): Promise<unknown> => {
    signal?.throwIfAborted();

    const config = mockConfigs.get(name);
    if (!config) {
        throw new Error(`Конфигурация «${name}» не найдена.`);
    }

    return structuredClone(config);
};
