import ActionButton from "./ActionButton";
import type { FormAction } from "./types";

type FooterProps = {
    actions: FormAction[];
    onAction: (action: FormAction) => void;
};

const Footer = ({ actions, onAction }: FooterProps) => {
    if (actions.length === 0) return null;

    return (
        <footer className="flex flex-wrap justify-end gap-3">
            {actions.map((action, index) => (
                <ActionButton key={index} action={action} onAction={onAction} />
            ))}
        </footer>
    );
};

export default Footer;
