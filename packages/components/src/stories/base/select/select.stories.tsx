import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { SelectProps } from "../../../organism/select/types";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "select",
  component: Select,
} as Meta<SelectProps>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    value: `TestValue${index}`,
    label: `Test Label${index}`,
  };
});

const Template: Story<SelectProps> = () => (
  <StoryContainer>
    <Select data={fakeData} />
  </StoryContainer>
);

export const Primary = Template.bind({});
