import React, { type FC } from "react";
import { useAdminFiles } from "../../hooks";
import clsx from "clsx";
import { FILE_ITEM_CLASSNAME } from "../../constants";
import { CloseButton } from "@/shared";
import { useConfirmModal } from "@/features";

type Props = {
    file: any;
};

const FileItem: FC<Props> = ({ file }) => {
    const { activeFilesId, removeFilesFromActive, makeFilesActive } =
        useAdminFiles();
    const open = useConfirmModal((state) => state.open);

    const isFileActive = activeFilesId.includes(file.id);

    const handleClickFile = () => {
        if (isFileActive) {
            removeFilesFromActive([file.id]);
        } else {
            makeFilesActive([file.id]);
        }
    };

    const handleDeleteFile = async () => {
        console.log("tanstack - удалил файл", file.id);
        makeFilesActive([]);
    };

    const handleDeleteFileButton = () => {
        open({
            title: "Подтвердить удаление",
            description:
                "Вы действительно хотите удалить файл? Это действие необратимо",
            callback: handleDeleteFile,
        });
    };

    return (
        <div
            className={clsx(FILE_ITEM_CLASSNAME, {
                "border-sky-300 bg-sky-100/70": isFileActive,
            })}
            onClick={handleClickFile}
        >
            <CloseButton
                className="top-0 right-0"
                onClick={handleDeleteFileButton}
            />
            <div>
                <img src={file.url} alt={file.name} />

                <span className="text-text-strong">{file.name}</span>
            </div>
        </div>
    );
};

export default FileItem;
