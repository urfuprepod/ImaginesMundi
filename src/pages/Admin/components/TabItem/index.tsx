import clsx from "clsx";
import React, { type FC } from "react";
import { Typography } from "@shared";

type Props = {
    isActive: boolean;
    title: string;
    onChangeActive: () => void;
};

const TabItem: FC<Props> = ({ isActive, title, onChangeActive }) => {
    return (
        <div
            className={clsx(
                "relative pb-8 transition-colors cursor-pointer duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                {
                    "after:absolute after:bottom-0 after:left-0 after:z-10 after:w-full after:h-[2px] after:bg-system after:content-['']":
                        isActive,
                },
            )}
            onClick={onChangeActive}
        >
            <Typography.H5>{title}</Typography.H5>
        </div>
    );
};

export default TabItem;
