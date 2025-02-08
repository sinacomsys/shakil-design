import { TextProps } from "../../atoms";

export interface TabItem {
  id: string;
  content: React.ReactNode;
  title?:
    | React.ReactNode
    | (({
        id,
        isActive,
      }: {
        id: string;
        isActive: boolean;
      }) => React.ReactNode);
  closeable?: boolean;
}
export interface TabsProps {
  activeTab?: string;
  onChange?: (id: string) => void;
  onClose?: (id: string) => void;
  className?: string;
  noContent?: React.ReactNode;
  items: TabItem[];
  type?: "line" | "card";
  tabBarExtraContent?: React.ReactNode;
}

export interface InternalTabPaneProps
  extends Pick<TabsProps, "onChange" | "onClose">,
    Pick<TabItem, "closeable" | "id" | "title"> {
  isActive: boolean;
}

export interface TitleMutualDefaultContentProps
  extends Pick<TextProps, "theme"> {
  color: string | undefined;
  title: string;
}
