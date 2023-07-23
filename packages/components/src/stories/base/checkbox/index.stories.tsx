import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { CheckBox, CheckBoxProps } from "../../../molecules/checkbox";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "checkbox",
  component: CheckBox,
} as Meta<CheckBoxProps>;

const Template: Story<CheckBoxProps> = (args) => {
  const [isCheck, SetValue] = useState(false);
  const hangleOnChange = () => {
    SetValue((prev) => !prev);
  };
  return (
    <StoryContainer>
      <div
        style={{
          backgroundColor: "gray",
          width: 200,
          height: 200,
        }}
      >
        <CheckBox {...args} checked={isCheck} onChange={hangleOnChange}>
          test
        </CheckBox>
      </div>
    </StoryContainer>
  );
};

export const LightMode = Template.bind({});
export const DarkMode = Template.bind({});
LightMode.args = {
  value: "test value",
  mode: "light",
};

DarkMode.args = {
  value: "test value",
  mode: "dark",
};

export const Indeterminate = Template.bind({});

Indeterminate.args = {
  indeterminate: true,
};
