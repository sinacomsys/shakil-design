import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryContainer } from "../../container";
import React from "react";
import { ScrollView, ScrollViewProps } from "../../../atoms";
export default {
  title: "Scroll View",
  component: ScrollView,
} as Meta<ScrollViewProps>;

const Template: Story<ScrollViewProps> = () => {
  return (
    <StoryContainer>
      <ScrollView style={{ height: "100%", padding: 20 }}>
        <div style={{ height: 1000, border: "1px solid gray" }}>
          scroll view
        </div>
      </ScrollView>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
