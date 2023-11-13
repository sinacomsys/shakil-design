import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Tabs, TabsProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import { Text } from "../../../atoms";
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
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Text>Title</Text>
          </div>
        );
      },
      content: (
        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
          TEST CONTENT
        </div>
      ),
    },
    {
      closeable: true,
      id: "2",
      renderTitle: "Title",
      content: (
        <div style={{ backgroundColor: "lightblue", height: "100%" }}>
          TEST CONTENT2
        </div>
      ),
    },
  ];
  return (
    <StoryContainer>
      <div style={{ backgroundColor: "gray", padding: 20, height: "100%" }}>
        <Tabs
          TabsTitle={"test title"}
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
