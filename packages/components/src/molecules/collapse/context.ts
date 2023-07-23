import { createContext } from 'react';

interface CollapseContextProps {
  onClickPanel: (value: string) => void;
  openedPanels: string[];
  defaultOpen: boolean;
  handleDefaultOpen: (value: string) => void;
}

const defaultValue: CollapseContextProps = {
  onClickPanel: () => ({}),
  openedPanels: [],
  defaultOpen: false,
  handleDefaultOpen: () => ({}),
};

const CollapseContext = createContext(defaultValue);

export { CollapseContext };
