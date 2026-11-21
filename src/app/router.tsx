import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin, Main } from "../pages";
import { mockHomeSectionConfig } from "../pages/Main/mockHomeSectionConfig";
import type { RouterConfig } from "../features/monaco";

const routeElements = {
    Main: <Main sectionConfig={mockHomeSectionConfig} />,
    Admin: <Admin />,
    Article: <p>Страница статьи пока недоступна.</p>,
};

export const createAppRouter = (config: RouterConfig) => createBrowserRouter(
    [
        {
            element: <App routeConfig={config} />,
            children: config.map(({ path, type }) => ({
                path,
                element: routeElements[type],
            })),
        },
    ],
    // { basename: "/imagines/" },
);
