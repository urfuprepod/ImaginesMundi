import type { ComponentType } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { FieldConfig, FieldViewProps, FormValues } from "./types";

type ControlledFieldProps<Config extends FieldConfig> = {
    config: Config;
    component: ComponentType<FieldViewProps<Config>>;
    defaultValue: FormValues[string];
};

const ControlledField = <Config extends FieldConfig>({
    config,
    component: Component,
    defaultValue,
}: ControlledFieldProps<Config>) => {
    const { control } = useFormContext<FormValues>();

    return (
        <Controller
            control={control}
            name={config.name}
            defaultValue={defaultValue}
            rules={{ required: config.required ? "Обязательное поле" : false }}
            render={({ field, fieldState }) => (
                <Component config={config} field={field} fieldState={fieldState} />
            )}
        />
    );
};

export default ControlledField;
