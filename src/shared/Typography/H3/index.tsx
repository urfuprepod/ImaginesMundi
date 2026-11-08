import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

type Props = {
    className?: string;
};

const H3: FC<PropsWithChildren<Props>> = (props) => {
    const { children, className } = props;

    return <h3 className={clsx("text-h3", className)}>{children}</h3>;
};

export default H3;
