import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Tabs, TabsProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "tab",
  component: Tabs,
} as Meta<TabsProps>;

const Template: Story<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  const items: TabsProps["items"] = [
    {
      closeable: true,
      id: "1",
      renderTitle: () => {
        return <div>title</div>;
      },
      content: <div>sag</div>,
    },
    {
      closeable: true,
      id: "2",
      renderTitle: () => {
        return <div>title2</div>;
      },
      content: <div>sag2</div>,
    },
  ];
  return (
    <StoryContainer>
      <div style={{ backgroundColor: "gray", padding: 20, height: "100%" }}>
        <Tabs
          activeTab={activeTab}
          onChange={(id: string) => {
            setActiveTab(id);
          }}
          items={items}
        />
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
