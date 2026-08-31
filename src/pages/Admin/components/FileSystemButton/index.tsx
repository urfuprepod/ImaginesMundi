import { useId, type FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

type Props = {
    onClick: () => void;
    Icon: LucideIcon;
    hint: string;
    isDisabled?: boolean
};

const FileSystemButton: FC<Props> = (props) => {
    const { onClick, Icon, hint, isDisabled } = props;
    const id = useId();

    return (
        <>
            <Tooltip id={id} />
            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={hint}
                onClick={onClick}
                disabled={isDisabled}
            >
                <Icon size={14} color="#3393ff" />
            </button>
        </>
    );
};

export default FileSystemButton;
