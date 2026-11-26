import { useId } from "react";
import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import { FieldLegend, FieldSet } from "../../../shared/ui/field";
import FormField from "../FormField";
import type { FieldConfigOf, FormValues } from "../types";

const RepeaterField = ({ config }: { config: FieldConfigOf<"repeater"> }) => {
    const { name, label, required, props: { fields } } = config;
    const { control, getFieldState } = useFormContext<Record<string, FormValues[]>>();
    const { fields: rows, append, remove } = useFieldArray({
        control,
        name,
        rules: { required: required ? "Добавьте хотя бы один элемент" : false },
    });
    const formState = useFormState({ control, name });
    const error = getFieldState(name, formState).error?.root;
    const errorId = useId();

    const addRow = () => {
        append(Object.fromEntries(fields.map(field => [
            field.name,
            field.type === "repeater" ? [] : "",
        ])));
    };

    return (
        <FieldSet className="gap-3" aria-describedby={error ? errorId : undefined}>
            <FieldLegend>{label}</FieldLegend>
            {rows.map((row, index) => (
                <div key={row.id} className="flex flex-col gap-3 rounded border border-border/20 p-3">
                    {fields.map(field => {
                        const fieldName = `${name}.${index}.${field.name}`;
                        return <FormField key={fieldName} config={{ ...field, name: fieldName }} />;
                    })}
                    <button
                        type="button"
                        className="self-start text-link hover:underline"
                        onClick={() => remove(index)}
                    >
                        Убрать
                    </button>
                </div>
            ))}
            <button type="button" className="self-start text-link hover:underline" onClick={addRow}>
                Добавить
            </button>
            {error && (
                <p id={errorId} role="alert" className="text-destructive">{error.message}</p>
            )}
        </FieldSet>
    );
};

export default RepeaterField;
