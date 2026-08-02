import clsx from "clsx";
import { type FC } from "react";
import { HORIZONTAL_STYLES, VERTICAL_STYLES } from "./constants";

type Props = {
    isVertical?: boolean;
};

const Divider: FC<Props> = ({ isVertical = false }) => {
    return (
        <div
            className={clsx("bg-black", {
                [VERTICAL_STYLES]: isVertical,
                [HORIZONTAL_STYLES]: !isVertical,
            })}
        ></div>
    );
};

export default Divider;
