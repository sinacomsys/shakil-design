import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
declare const useFileInput: (register: UseFormRegisterReturn | undefined) => {
    label: string | null;
    fileChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default useFileInput;
