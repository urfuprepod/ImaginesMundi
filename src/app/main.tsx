import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer,  } from "react-toastify";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            draggable
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
        />
        <RouterProvider router={router} />
    </StrictMode>,
);
