import React from "react";
import { FilesPanel, Tabs } from "./components";

const AdminPage = () => {
    return (
        <div className="relative z-10 rounded-md bg-white h-full p-7 shadow-md flex flex-col gap-16">
            <Tabs />

            <div className="border border-solid border-b-[#B7C3D2]">
                <FilesPanel />
            </div>
        </div>
    );
};

export default AdminPage;
