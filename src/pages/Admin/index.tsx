import { useLocation } from "react-router-dom";
import { FilesPanel, Tabs } from "./components";
import { useAdminFiles } from "./hooks";
import { useEffect } from "react";

const AdminPage = () => {

    const location = useLocation();
    const {makeFilesActive} = useAdminFiles();

    useEffect(() => {
        makeFilesActive([])
    }, [location.pathname])

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
