import clsx from "clsx";
import {
    CircleChevronLeft,
    CircleChevronRight,
    PaperBag,
    X,
} from "lucide-react";
import FileSystemButton from "../FileSystemButton";
import { useAdminFiles } from "../../hooks";
import FilesUploadingButton from "../FilesUploadingButton";

const borderStyle = "border-b border-solid border-b-[#B7C3D2]";

const files: any[] = [];
const FilesPanel = () => {
    const isActiveIdLastOrFirst = () => {
        const defaultValue = { last: false, first: true };

        if (activeFilesId.length > 1) return { last: true, first: true };
        if (activeFilesId.length === 0) return defaultValue;

        const id = files.findIndex((el) => el.id === activeFilesId[0]);
        if (id === 0) return defaultValue;
        if (id === files.length - 1) return { last: true, first: false };
        return defaultValue;
    };

    const handleNextElement = () => {
        const activeIndex = files.findIndex((el) => el.id === activeFilesId[0]);
        makeFilesActive(files[activeIndex + 1]?.id ?? []);
    };

    const handlePreviousElement = () => {
        const activeIndex = files.findIndex((el) => el.id === activeFilesId[0]);
        makeFilesActive(files[activeIndex - 1]?.id ?? []);
    };

    const handleDeleteFiles = async () => {
        // TODO: вызвать удаление
        makeFilesActive([]);
    };

    const handleChooseAllFiles = () => {
        makeFilesActive(files.map((el) => el.id));
    };

    const { activeFilesId, makeFilesActive } = useAdminFiles();

    const isNoActiveFile = activeFilesId.length === 0;
    const config = isActiveIdLastOrFirst();

    return (
        <div className={clsx(borderStyle, "px-6 py-4 flex gap-3")}>
            <FileSystemButton
                Icon={CircleChevronLeft}
                hint="Предыдущий элемент"
                isDisabled={config.first}
                onClick={handlePreviousElement}
            />
            <FileSystemButton
                Icon={CircleChevronRight}
                hint="Следующий элемент"
                isDisabled={config.last}
                onClick={handleNextElement}
            />

            <FilesUploadingButton />

            <FileSystemButton
                Icon={X}
                hint="Удалить файл(-ы)"
                isDisabled={isNoActiveFile}
                onClick={handleDeleteFiles}
                colorIcon="red"
            />

            <FileSystemButton
                Icon={PaperBag}
                hint="Выбрать все файлы"
                isDisabled={files.length === 0}
                onClick={handleChooseAllFiles}
            />
        </div>
    );
};

export default FilesPanel;
