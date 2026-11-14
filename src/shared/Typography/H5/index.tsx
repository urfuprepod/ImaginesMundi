import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

type Props = {
    className?: string;
};

const H5: FC<PropsWithChildren<Props>> = (props) => {
    const { children, className } = props;

    return <h5 className={clsx("text-h5", className)}>{children}</h5>;
};

export default H5;
