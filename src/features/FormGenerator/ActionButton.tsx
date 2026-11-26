import { actionButtonClassName } from "./constants";
import type { FormAction } from "./types";

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
