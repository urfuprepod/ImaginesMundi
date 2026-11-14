import { useLocation, useSearchParams } from "react-router-dom";
import { Configurations, FilesPanel, Tabs, TextEditor } from "./components";
import { useAdminFiles } from "./hooks";
import { useEffect } from "react";
import { TABS, type AdminTab } from "./components/Tabs";

const AdminPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = TABS.find(
        ({ value }) => value === searchParams.get("tab"),
    )?.value ?? TABS[0].value;

    const location = useLocation();
    const makeFilesActive = useAdminFiles(state => state.makeFilesActive);

    useEffect(() => {
        makeFilesActive([]);
    }, [location.pathname, activeTab, makeFilesActive]);

    const handleChangeTab = (value: AdminTab) => {
        setSearchParams(previous => {
            const next = new URLSearchParams(previous);
            next.set("tab", value);
            return next;
        });
    };

    return (
        <div className="relative z-10 rounded-md bg-white h-full p-7 shadow-md flex flex-col gap-16">
            <Tabs activeId={activeTab} onChangeActive={handleChangeTab} />

            <div hidden={activeTab !== "issues" && activeTab !== "images"} className="border border-solid border-b-[#B7C3D2]">
                <FilesPanel />
            </div>
            <div hidden={activeTab !== "text-editor"}>
                <TextEditor />
            </div>
            <div hidden={activeTab !== "configurations"}>
                <Configurations />
            </div>
        </div>
    );
};

export default AdminPage;
