import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { QueryKey } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { FormAction, FormValues } from "./types";

const useFormGenerator = (onSubmit: () => void, dataKey: QueryKey) => {
    const form = useForm<FormValues>();
    const queryClient = useQueryClient();
    const isHandlingAction = useRef(false);
    const { mutateAsync, reset, isError } = useMutation({
        mutationFn: ({ action, values }: { action: FormAction; values: FormValues }) =>
            axios.request({ method: action.method, url: action.link, data: values }),
    });
    const { isSubmitting } = form.formState;

    const handleAction = async (action: FormAction) => {
        if (isHandlingAction.current) return;

        isHandlingAction.current = true;
        reset();
        let didSubmit = false;
        try {
            await form.handleSubmit(async values => {
                try {
                    await mutateAsync({ action, values });
                } catch {
                    // The mutation exposes the error for the form to display.
                    return;
                }
                didSubmit = action.type === "submit";
            })();
            if (didSubmit) {
                onSubmit();
                queryClient.invalidateQueries({ queryKey: dataKey });
            }
        } finally {
            isHandlingAction.current = false;
        }
    };

    return { form, isSubmitting, isError, handleAction };
};

export default useFormGenerator;
