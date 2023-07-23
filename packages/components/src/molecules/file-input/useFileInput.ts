import { ChangeEvent, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const useFileInput = (register: UseFormRegisterReturn | undefined) => {
  const [label, setLabel] = useState<string | null>(null);
  const fileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    register?.onChange(event);
    if (!event.target.files?.length) {
      setLabel(null);
      return;
    }
    setLabel(event.target.files[0].name);
  };
  return { label, fileChangeHandler };
};
export default useFileInput;
