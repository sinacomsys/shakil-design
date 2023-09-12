import { Moment } from "moment-jalaali";
interface ManualImportDateProps {
  onSelectDate: (args: Moment) => void;
  onSetCurrentDate: (args: Moment) => void;
  goToday: () => void;
}
export declare const ManualImportDate: ({
  goToday,
  onSelectDate,
  onSetCurrentDate,
}: ManualImportDateProps) => import("react/jsx-dev-runtime").JSX.Element;
export {};
