import Modal from "react-modal";
import { TriangleAlert, X } from "lucide-react";
import { useConfirmModal } from "../model/useConfirmModal";

export const ConfirmModal = () => {
    const { title, description, callback, isOpen, close } = useConfirmModal();

    const handleConfirm = () => {
        close();
        callback?.();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            role="alertdialog"
            overlayClassName="fixed inset-0 z-[1000] flex items-center justify-center bg-black/35 p-6"
            className="w-full max-w-[46rem] overflow-hidden rounded-lg border border-slate-300 bg-white text-[1.4rem] text-slate-800 shadow-2xl outline-none"
            bodyOpenClassName="overflow-hidden"
        >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
                <h2 className="min-w-0 break-words font-medium">
                    {title}
                </h2>
                <button
                    type="button"
                    onClick={close}
                    className="shrink-0 rounded p-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-system"
                >
                    <X size={18} />
                </button>
            </div>
            <div className="flex items-start gap-5 p-8">
                <TriangleAlert
                    size={32}
                    className="shrink-0 text-amber-500"
                />
                <div className="min-w-0">
                    <p
                        className="whitespace-pre-wrap break-words leading-relaxed"
                    >
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
                <button
                    type="button"
                    autoFocus
                    onClick={close}
                    className="min-w-[10rem] rounded border border-slate-300 bg-white px-5 py-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-system"
                >
                    Отмена
                </button>
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="min-w-[10rem] rounded border border-system bg-system px-5 py-2 text-white hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-system"
                >
                    Подтвердить
                </button>
            </div>
        </Modal>
    );
};

