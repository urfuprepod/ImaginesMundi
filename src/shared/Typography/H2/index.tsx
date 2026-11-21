import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

type Props = {
    className?: string;
    uppercase?: boolean;
    center?: boolean;
};

const H2: FC<PropsWithChildren<Props>> = (props) => {
    const { children, className, uppercase = true, center = false } = props;

    return (
        <h3
            className={clsx("text-h2 font-heading", className, {
                uppercase,
                ["text-center"]: center,
            })}
        >
            {children}
        </h3>
    );
};

export default H2;
