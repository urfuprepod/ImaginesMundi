import React from "react";
import { Tabs } from "./components";

const AdminPage = () => {
    return (
        <div className="relative z-10 rounded-md bg-white h-full p-7 shadow-md flex flex-col gap-8">
            <Tabs />
        </div>
    );
};

export default AdminPage;
