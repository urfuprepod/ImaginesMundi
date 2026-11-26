import { useId } from "react";
import { Input } from "../../../shared/ui/input";
import type { FieldConfigOf, FieldViewProps } from "../types";

const TextField = ({
    config,
    field,
    fieldState,
}: FieldViewProps<FieldConfigOf<"text">>) => {
    const id = useId();
    const errorId = fieldState.error ? `${id}-error` : undefined;

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{config.label}</label>
            <Input
                {...field}
                id={id}
                type="text"
                placeholder={config.props?.placeholder}
                value={typeof field.value === "string" ? field.value : ""}
                aria-required={config.required}
                aria-invalid={fieldState.invalid}
                aria-describedby={errorId}
            />
            {fieldState.error && (
                <p id={errorId} role="alert" className="text-destructive">
                    {fieldState.error.message}
                </p>
            )}
        </div>
    );
};

export default TextField;
