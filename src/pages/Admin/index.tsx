import { useLocation } from "react-router-dom";
import { FilesPanel, Tabs, TextEditor } from "./components";
import { useAdminFiles } from "./hooks";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const location = useLocation();
    const {makeFilesActive} = useAdminFiles();

    useEffect(() => {
        makeFilesActive([])
    }, [location.pathname])

    const handleChangeTab = (id: number) => {
        setActiveTab(id);
        makeFilesActive([]);
    };

    return (
        <div className="relative z-10 rounded-md bg-white h-full p-7 shadow-md flex flex-col gap-16">
            <Tabs activeId={activeTab} onChangeActive={handleChangeTab} />

            <div hidden={activeTab === 2} className="border border-solid border-b-[#B7C3D2]">
                <FilesPanel />
            </div>
            <div hidden={activeTab !== 2}>
                <TextEditor />
            </div>
        </div>
    );
};

export default AdminPage;
