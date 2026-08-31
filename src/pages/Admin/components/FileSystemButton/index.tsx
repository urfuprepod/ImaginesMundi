import { useId, type FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

type Props = {
    onClick?: () => void;
    Icon: LucideIcon;
    hint: string;
    isDisabled?: boolean;
    colorIcon?: string;
};

const FileSystemButton: FC<Props> = (props) => {
    const { onClick, Icon, hint, isDisabled, colorIcon } = props;
    const id = useId();

    return (
        <>
            <Tooltip id={id} style={{ fontSize: "1.25rem" }} />
            <button
                data-tooltip-id={id}
                data-tooltip-content={hint}
                onClick={onClick}
                disabled={isDisabled}
                className="cursor-pointer duration-150 hover:scale-[1.2] transition-transform"
            >
                <Icon size={24} color={colorIcon || "#3393ff"} />
            </button>
        </>
    );
};

export default FileSystemButton;
