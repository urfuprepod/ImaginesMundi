import type { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import type { FormConfig } from "../monaco";

export type FormValues = {
    [name: string]: string | FormValues[];
};
export type FieldConfig = FormConfig["fields"][number];
export type FormAction = FormConfig["actions"][number];
export type FieldConfigOf<Type extends FieldConfig["type"]> = Extract<FieldConfig, { type: Type }>;

export type FieldViewProps<Config extends FieldConfig> = {
    config: Config;
    field: ControllerRenderProps<FormValues>;
    fieldState: ControllerFieldState;
};
