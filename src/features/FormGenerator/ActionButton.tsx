import type { FormAction } from "./types";

const actionButtonClassName = `
    cursor-pointer rounded-md border border-border/20 bg-white px-4 py-2
    font-medium text-text-primary hover:bg-gg
    focus-visible:outline-2 focus-visible:outline-link
    disabled:cursor-not-allowed disabled:opacity-50
`;

type ActionButtonProps = {
    action: FormAction;
    onAction: (action: FormAction) => void;
};

const ActionButton = ({ action, onAction }: ActionButtonProps) => (
    <button
        type="button"
        onClick={() => onAction(action)}
        className={actionButtonClassName}
    >
        {action.text}
    </button>
);

export default ActionButton;
