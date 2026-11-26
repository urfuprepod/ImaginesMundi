import type { QueryKey } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import type { FormConfig } from "../monaco";
import FormField from "./FormField";
import Footer from "./Footer";
import useFormGenerator from "./useFormGenerator";

type FormGeneratorProps = {
    config: FormConfig;
    onSubmit: () => void;
    dataKey: QueryKey;
};

const FormGenerator = ({ config, onSubmit, dataKey }: FormGeneratorProps) => {
    const { form, isSubmitting, isError, handleAction } = useFormGenerator(onSubmit, dataKey);

    return (
        <FormProvider {...form}>
            <form aria-busy={isSubmitting} onSubmit={event => event.preventDefault()}>
                <fieldset disabled={isSubmitting} className="flex min-w-0 flex-col gap-4">
                    {config.fields.map(field => (
                        <FormField key={field.name} config={field} />
                    ))}
                    <Footer actions={config.actions} onAction={handleAction} />
                </fieldset>
                {isSubmitting && <p role="status" className="mt-3">Отправка…</p>}
                {isError && <p role="alert" className="mt-3 text-destructive">Не удалось отправить форму.</p>}
            </form>
        </FormProvider>
    );
};

export default FormGenerator;
