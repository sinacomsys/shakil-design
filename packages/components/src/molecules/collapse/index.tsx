import React, { useState } from 'react';
import { CollapseContext } from './context';
import { Panel } from './panel';

export interface CollapseProps {
  children: React.ReactNode;
  accordion?: boolean;
  onChange?: (value: {
    activePanelsKey: string[];
    clickedPanelKey: string;
  }) => void;
  activeKey?: string[];
  defaultOpen?: boolean;
}

const Collapse = ({
  children,
  accordion,
  onChange,
  activeKey,
  defaultOpen,
}: CollapseProps) => {
  const [openedPanels, setOpenPanel] = useState<string[]>([]);

  let _openedPanels: string[] = [];

  if (activeKey) {
    _openedPanels = activeKey;
  } else {
    _openedPanels = openedPanels;
  }

  const handleDefaultOpen = (id: string) => {
    setOpenPanel((prev) => [...prev, id]);
  };

  const handleOnClickPanel = (id: string) => {
    if (activeKey) {
      onChange?.({ activePanelsKey: [id], clickedPanelKey: id });
      return;
    }
    const alreadyExist = openedPanels.find((item) => item === id);
    let _openedPanels: string[] = [];

    if (!accordion) {
      if (alreadyExist) {
        _openedPanels = openedPanels.filter((item) => item !== alreadyExist);
        setOpenPanel(_openedPanels);
      } else if (!alreadyExist) {
        _openedPanels = [...openedPanels, id];
        setOpenPanel(_openedPanels);
      }
    } else if (accordion) {
      _openedPanels = alreadyExist ? [] : [id];
      setOpenPanel(_openedPanels);
    }
    onChange?.({ activePanelsKey: _openedPanels, clickedPanelKey: id });
  };

  return (
    <CollapseContext.Provider
      value={{
        onClickPanel: handleOnClickPanel,
        openedPanels: _openedPanels,
        defaultOpen: defaultOpen || false,
        handleDefaultOpen,
      }}
    >
      <div>{children}</div>
    </CollapseContext.Provider>
  );
};

Collapse.Panel = Panel;
export { Collapse };
