import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./router";
import { mockRouterConfig } from "../shared/routerConfig";
import { ToastContainer,  } from "react-toastify";
import Modal from "react-modal";
import { ConfirmModal } from "@features";

Modal.setAppElement("#root");

const router = createAppRouter(mockRouterConfig);

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
        <ConfirmModal />
    </StrictMode>,
);
