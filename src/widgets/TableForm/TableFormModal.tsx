import type { QueryKey } from "@tanstack/react-query";
import { X } from "lucide-react";
import Modal from "react-modal";
import { FormGenerator } from "../../features";
import type { FormConfig } from "../../features/monaco";
import Typography from "../../shared/Typography";
import { modalClassName, closeButtonClassName } from "./constants";

type TableFormModalProps = {
    config: FormConfig;
    dataKey: QueryKey;
    isOpen: boolean;
    onClose: () => void;
};

const TableFormModal = ({ config, dataKey, isOpen, onClose }: TableFormModalProps) => (
    <Modal
        isOpen={isOpen}
        contentLabel={config.title}
        onRequestClose={onClose}
        overlayClassName="fixed inset-0 z-[1000] flex items-center justify-center bg-black/35 p-6"
        className={modalClassName}
        bodyOpenClassName="overflow-hidden"
    >
        <div className="mb-4 flex items-start justify-between gap-4">
            <Typography.H2 uppercase={false}>{config.title}</Typography.H2>
            <button
                type="button"
                aria-label="Закрыть"
                title="Закрыть"
                className={closeButtonClassName}
                onClick={onClose}
            >
                <X size={20} aria-hidden="true" />
            </button>
        </div>
        <FormGenerator config={config} onSubmit={onClose} dataKey={dataKey} />
    </Modal>
);

export default TableFormModal;
