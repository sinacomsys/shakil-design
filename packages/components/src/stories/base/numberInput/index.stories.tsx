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
    <div style={{ width: 100 }}>
      <input />
      <NumberInput
        wrapperStyle={{ marginBottom: 40 }}
        disabled
        style={{ fontSize: 20 }}
        value="122"
      />
      <NumberInput />
    </div>
  </StoryContainer>
);

export const Primary = Template.bind({});
