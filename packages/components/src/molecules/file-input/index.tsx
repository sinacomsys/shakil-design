import classNames from "classnames";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { BaseIcon } from "../../atoms/baseIcon";
import { useTheme } from "../../theme/context";
import { useStyle } from "./style";
import useFileInput from "./useFileInput";
import { Text } from "../../atoms";

export interface FileInputProps {
  register?: UseFormRegisterReturn;
  className?: string;
  fileType?: string;
}

const FileInput: FC<FileInputProps> = ({ register, className, fileType }) => {
  const classes = useStyle();
  const { label, fileChangeHandler } = useFileInput(register);
  const { color_primary_2 } = useTheme();

  return (
    <div className={classNames(classes["fileInput"], className)}>
      <label htmlFor={register?.name}>
        <Text size={16} color={color_primary_2}>
          {register?.name}
        </Text>
      </label>
      <label className={classes["fileChooser"]}>
        {label ? (
          <Text size={16} color={color_primary_2}>
            {label}
          </Text>
        ) : (
          <>
            <BaseIcon
              size={{ height: 10, width: 10 }}
              name="Add-Box_Add-Icon"
            />
            <Text size={16} color={color_primary_2}>
              Add File
            </Text>
          </>
        )}
        <input
          {...register}
          onChange={fileChangeHandler}
          accept={fileType}
          type="file"
          id="formId"
          hidden
        />
      </label>
    </div>
  );
};
export { FileInput };
