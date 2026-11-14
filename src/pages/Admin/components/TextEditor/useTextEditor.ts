import { useController, useForm, type SubmitErrorHandler } from "react-hook-form";
import { callError, callWarning } from "@utils";

type PageFormValues = {
    title: string;
    content: string;
};

export const useTextEditor = () => {
    const { control, register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PageFormValues>({
        defaultValues: { title: "", content: "" },
        reValidateMode: "onChange",
    });

    const { field: contentField } = useController({
        name: "content",
        control,
        rules: {
            validate: (html) => {
                const text = new DOMParser().parseFromString(html, "text/html").body.textContent ?? "";
                return text.replace(/[\s\u200B-\u200D\uFEFF]/g, "").length > 0 || "Заполните содержимое страницы";
            },
        },
    });

    const handleInvalid: SubmitErrorHandler<PageFormValues> = (fieldErrors) => {
        const messages = [fieldErrors.title?.message, fieldErrors.content?.message].filter(Boolean);
        callError(messages.join(". "));
    };

    const handleCreatePage = (_values: PageFormValues) => {
        callWarning("Создание страницы пока не подключено к серверу. Данные не сохранены.");
    };

    return {
        titleField: register("title", {
            validate: (value) => value.trim().length > 0 || "Введите заголовок страницы",
            setValueAs: (value: string) => value.trim(),
        }),
        content: contentField.value,
        handleContentChange: contentField.onChange,
        handleContentBlur: contentField.onBlur,
        titleError: errors.title?.message,
        contentError: errors.content?.message,
        isSubmitting,
        handleSubmit: handleSubmit(handleCreatePage, handleInvalid),
    };
};
