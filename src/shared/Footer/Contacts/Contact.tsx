import React, { type FC, type PropsWithChildren } from "react";
import * as LucideIcons from "lucide-react";

type Props = {
    icon: keyof typeof LucideIcons;
};

const Contact: FC<PropsWithChildren<Props>> = ({ children, icon }) => {
    const Icon = LucideIcons[icon] as React.ElementType;

    return (
        <div className="flex items-start gap-8">
            <Icon color="#47494b" className={'py-0'} size={"2.5rem"} />
            {children}
        </div>
    );
};

export default Contact;
