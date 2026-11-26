import type { ReactNode } from "react";
import ControlledField from "./ControlledField";
import RepeaterField from "./fields/RepeaterField";
import TextField from "./fields/TextField";
import type { FieldConfig, FieldConfigOf } from "./types";

type FieldType = FieldConfig["type"];
type FieldRenderers = {
    [Type in FieldType]: (config: FieldConfigOf<Type>) => ReactNode;
};

const fieldRenderers: FieldRenderers = {
    text: config => <ControlledField config={config} component={TextField} defaultValue="" />,
    repeater: config => <RepeaterField config={config} />,
};

const renderField = <Type extends FieldType>(type: Type, config: FieldConfigOf<Type>) =>
    fieldRenderers[type](config);

const FormField = ({ config }: { config: FieldConfig }) => renderField(config.type, config);

export default FormField;
