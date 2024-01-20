import { Meta, Story } from "@storybook/react/types-6-0";
import { NumberInput } from "../../../organism";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "number input",
  component: NumberInput,
} as Meta<any>;

const Template: Story<any> = () => (
  <StoryContainer>
    <div style={{ width: 200 }}>
      <NumberInput wrapperStyle={{ marginBottom: 40 }} />
      <NumberInput keyboardType="numeric" />
    </div>
  </StoryContainer>
);

export const Primary = Template.bind({});
