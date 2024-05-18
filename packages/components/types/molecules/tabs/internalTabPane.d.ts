import { TabItem } from ".";
export interface InternalTabPaneProps extends Omit<TabItem, "content"> {
  onClick: (id: string) => void;
  isActive: boolean;
  onClose?: (id: string) => void;
}
declare function InternalTabPane({
  id,
  renderTitle,
  onClick,
  isActive,
  onClose,
  closeable,
}: InternalTabPaneProps): import("react/jsx-dev-runtime").JSX.Element;
export { InternalTabPane };
