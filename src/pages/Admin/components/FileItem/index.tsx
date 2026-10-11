import React, { type FC } from "react";
import { useAdminFiles } from "../../hooks";
import clsx from "clsx";
import { FILE_ITEM_CLASSNAME } from "../../constants";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
    file: any;
};

const FileItem: FC<Props> = ({ file }) => {
    const { activeFilesId, removeFilesFromActive, makeFilesActive } = useAdminFiles();

    const isFileActive = activeFilesId.includes(file.id);

    const handleClickOutside = () => {
        // Your custom logic here
        console.log("clicked outside");
    };

    const handleClickInside = () => {
        if (isFileActive) {
            removeFilesFromActive([file.id])
        } else {
            makeFilesActive([file.id])
        }
    };

    return (
        <div
            className={clsx(FILE_ITEM_CLASSNAME, {
                "border-sky-300 bg-sky-100/70": isFileActive,
            })}
            onClick={handleClickInside}
        >
            <div>
                <img src={file.url} alt={file.name} />

                <span className="text-text-strong">{file.name}</span>
            </div>
        </div>
    );
};

export default FileItem;
