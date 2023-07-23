import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
export interface FileInputProps {
    register?: UseFormRegisterReturn;
    className?: string;
    fileType?: string;
}
declare const FileInput: FC<FileInputProps>;
export { FileInput };
