import React from "react";
import { GRID_CLASSNAME } from "../../constants";
import FileItem from "../FileItem";

// ПОЛУЧАТЬ СПИСОК ИЗ TANSTACK
const data: any[] = [];

const FilesList = () => {
    return (
        <div className={GRID_CLASSNAME}>
            {data.map((file) => (
                <FileItem key={file.id} file={file} />
            ))}
        </div>
    );
};

export default FilesList;
