import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Tabs } from "../../../molecules";
import { StoryContainer } from "../../container";
import { Text } from "../../../atoms";
import React from "react";
import { TabsProps } from "../../../molecules/tabs/tabs.type";
export default {
  title: "Tabs",
  component: Tabs,
} as Meta<TabsProps>;

const Template: Story<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>("2");
  const items: TabsProps["items"] = [
    {
      closeable: true,
      id: "1",
      title: () => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Text>Title</Text>
          </div>
        );
      },
      content: (
        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
          <div>test content</div>
        </div>
      ),
    },
    {
      closeable: true,
      id: "2",
      title: "Titleeeeeeeeeeeeeeeeeeeeeeee",
      content: (
        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
          TEST CONTENT2
        </div>
      ),
    },
    {
      closeable: true,
      id: "3",
      title: "test",
      content: (
        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
          TEST CONTENT3
        </div>
      ),
    },
  ];
  return (
    <StoryContainer>
      <div style={{ backgroundColor: "gray", padding: 20, height: "100%" }}>
        <Tabs
          type={"card"}
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

export const Card = Template.bind({});
