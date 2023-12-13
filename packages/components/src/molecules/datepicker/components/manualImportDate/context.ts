import { createFormContext } from "react-hook-form-context";
interface ManualImportDateContextProps {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
}
export const ManualImportDateContext =
  createFormContext<ManualImportDateContextProps>({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });
