import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin, Main } from "../pages";

export const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Main />,
                },
                {
                    path: "/admin",
                    element: <Admin />,
                },
            ],
        },
    ],
    // { basename: "/imagines/" },
);
