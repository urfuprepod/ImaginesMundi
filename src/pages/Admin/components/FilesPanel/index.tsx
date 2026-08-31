import clsx from "clsx";
import { CircleChevronRight } from "lucide-react";
import React, { useState } from "react";

const borderStyle = "border border-solid border-b-[#B7C3D2]";

type Props = {
    files: any[];

}

const FilesPanel = () => {

    const [activeFileId, setActiveFileId] = useState<string | null>(null);
 
    return (
        <div className={borderStyle}>
            <div className={clsx(borderStyle, "px-6 flex gap-3")}>

                <button className="">
                    <CircleChevronRight />
                </button>
            </div>
        </div>
    );
};

export default FilesPanel;
