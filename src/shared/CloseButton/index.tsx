import clsx from "clsx";
import { X } from "lucide-react";
import { type FC } from "react";

type Props = {
    onClick: () => void;
    className?: string;
};

const CloseButton: FC<Props> = (props) => {
    const { onClick, className } = props;

    return (
        <button
            className={clsx(
                "absolute transition-transform duration-200 hover:scale-110",
                className,
            )}
            onClick={onClick}
        >
            <X size={20} color="red" />
        </button>
    );
};

export default CloseButton;
