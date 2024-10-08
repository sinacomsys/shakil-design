import { ReactNode } from "react";
export interface TabItem {
  id: string;
  content: React.ReactNode;
  renderTitle?:
    | React.ReactNode
    | (({ id, isActive }: { id: string; isActive: boolean }) => ReactNode);
  closeable?: boolean;
}
export interface TabsProps {
  activeTab?: string;
  onChange?: (id: string) => void;
  onClose?: (id: string) => void;
  className?: string;
  TabsTitle?: string | React.ReactNode;
  noContent?: React.ReactNode;
  items: TabItem[];
}
declare const Tabs: ({
  activeTab: activeTabProp,
  onChange,
  onClose,
  className,
  TabsTitle,
  noContent,
  items,
}: TabsProps) => import("react/jsx-runtime").JSX.Element;
export { Tabs };
