import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { FormAction, FormValues } from "./types";

const useFormGenerator = (onClose: () => void, onSaved?: () => void) => {
    const form = useForm<FormValues>();
    const isHandlingAction = useRef(false);
    const { mutateAsync, reset, isError } = useMutation({
        mutationFn: ({ action, values }: { action: FormAction; values: FormValues }) =>
            axios.request({ method: action.method, url: action.link, data: values }),
    });
    const { isSubmitting } = form.formState;

    const close = () => {
        reset();
        form.reset();
        onClose();
    };

    const handleClose = () => {
        if (!isHandlingAction.current) close();
    };

    const handleAction = async (action: FormAction) => {
        if (isHandlingAction.current) return;

        isHandlingAction.current = true;
        reset();
        let didSave = false;
        try {
            await form.handleSubmit(async values => {
                try {
                    await mutateAsync({ action, values });
                } catch {
                    // The mutation exposes the error for the form to display.
                    return;
                }
                didSave = true;
            })();
            if (didSave) {
                onSaved?.();
                close();
            }
        } finally {
            isHandlingAction.current = false;
        }
    };

    return { form, isSubmitting, isError, handleAction, handleClose };
};

export default useFormGenerator;
