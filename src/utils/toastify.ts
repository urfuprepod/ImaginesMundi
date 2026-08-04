import { toast } from "react-toastify";

export const callError = (text: string) =>
    toast.error(text, {
        hideProgressBar: false,
        progress: 0,
    });

export const callSuccess = (text: string) => {
    toast.success(text, {
        progress: 0,
    });
};

export const callWarning = (text: string) => {
    toast.warn(text, {
        progress: 0,
        hideProgressBar: false
    })
}