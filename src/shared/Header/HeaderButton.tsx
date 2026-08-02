import clsx from "clsx";
import React, { type FC, type PropsWithChildren } from "react";
import { HEADER_BUTTONS_STYLES } from "./constants";

type Props = {
    className: string;
};

const HeaderButton: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <button className={clsx(HEADER_BUTTONS_STYLES, className)}>
            {children}
        </button>
    );
};

export default HeaderButton;
