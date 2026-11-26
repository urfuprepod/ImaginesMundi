import { FormProvider } from "react-hook-form";
import Modal from "react-modal";
import Typography from "../../shared/Typography";
import type { FormConfig } from "../monaco";
import FormField from "./FormField";
import Footer from "./Footer";
import useFormGenerator from "./useFormGenerator";

type FormGeneratorProps = {
    config: FormConfig;
    isOpen: boolean;
    onClose: () => void;
    onSaved?: () => void;
};

const FormGenerator = ({ config, isOpen, onClose, onSaved }: FormGeneratorProps) => {
    const { form, isSubmitting, isError, handleAction, handleClose } = useFormGenerator(onClose, onSaved);

    return (
        <Modal
            isOpen={isOpen}
            contentLabel={config.title}
            onRequestClose={handleClose}
            shouldCloseOnEsc={!isSubmitting}
            shouldCloseOnOverlayClick={!isSubmitting}
            overlayClassName="fixed inset-0 z-[1000] flex items-center justify-center bg-black/35 p-6"
            className="max-h-full w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl outline-none"
            bodyOpenClassName="overflow-hidden"
        >
            <FormProvider {...form}>
                <form aria-busy={isSubmitting} onSubmit={event => event.preventDefault()}>
                    <fieldset disabled={isSubmitting} className="flex min-w-0 flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                            <Typography.H2 uppercase={false}>{config.title}</Typography.H2>
                            <button type="button" className="text-link hover:underline" onClick={handleClose}>
                                Закрыть
                            </button>
                        </div>
                        {config.fields.map(field => (
                            <FormField key={field.name} config={field} />
                        ))}
                        <Footer actions={config.actions} onAction={handleAction} />
                    </fieldset>
                    {isSubmitting && <p role="status" className="mt-3">Отправка…</p>}
                    {isError && <p role="alert" className="mt-3 text-destructive">Не удалось отправить форму.</p>}
                </form>
            </FormProvider>
        </Modal>
    );
};

export default FormGenerator;
