import { FC, ReactElement } from "react";
export interface ConfirmationDialogProps {
    message: string;
    title: string;
    onOkClicked?: () => void;
    onClose?: () => void;
    className?: string;
    children: ReactElement;
    okButtonOptions?: {
        type: "submit" | "button";
        formId: string;
    };
    containerId?: string;
}
declare const ConfirmationDialog: FC<ConfirmationDialogProps>;
export { ConfirmationDialog };
