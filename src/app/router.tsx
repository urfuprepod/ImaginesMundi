import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from "../pages";

export const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Main />,
                },
            ],
        },
    ],
    // { basename: "/imagines/" },
);
