import type { RouterConfig } from "../features/monaco";

export const mockRouterConfig = [
    { label: "Главная", path: "/", type: "Main" },
    { label: "Администратор", path: "/admin", type: "Admin" },
] satisfies RouterConfig;
