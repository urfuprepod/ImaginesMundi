import React, { useId } from "react";
import { Upload } from "lucide-react";
import { Tooltip } from "react-tooltip";

const FilesUploadingButton = () => {
    const handleUploadFile = async () => {};
    const id = useId();

    return (
        <>
            <input
                type="file"
                id={id}
                onChange={(e) => handleUploadFile()}
                className="hidden"
            />
            <label
                htmlFor={id}
                className="cursor-pointer duration-150 hover:scale-[1.2] transition-transform"
            >
                <Tooltip id={id} style={{ fontSize: "1.25rem" }} />
                <Upload
                    size={24}
                    data-tooltip-id={id}
                    data-tooltip-content={"Загрузить файлы"}
                    color={"#3393ff"}
                />
            </label>
        </>
    );
};

export default FilesUploadingButton;
