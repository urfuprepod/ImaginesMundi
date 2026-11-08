import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

type Props = {
    className?: string;
};

const Main: FC<PropsWithChildren<Props>> = (props) => {
    const { children, className } = props;

    return (
        <p className={clsx("text-paragraph wrap-break-word", className)}>
            {children}
        </p>
    );
};

export default Main;
