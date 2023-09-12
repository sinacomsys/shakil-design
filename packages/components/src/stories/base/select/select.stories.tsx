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
    test: `TestValue${index}`,
    test1: `Test Label${index}`,
  };
});

const Template: Story<SelectProps> = (args) => {
  return (
    <StoryContainer>
      <div style={{ width: 350 }}>
        <Select {...args} />
      </div>
    </StoryContainer>
  );
};

export const SingleSelect = Template.bind({});
export const MultipleSelect = Template.bind({});

SingleSelect.args = {
  unit: "pixel",
  valueExtractor: ({ test }) => test,
  labelExtractor: ({ test1 }) => test1,
  data: fakeData,
  allowClear: true,
  placeholder: "Select Item...",
};

MultipleSelect.args = {
  unit: "pixel",
  valueExtractor: ({ test }) => test,
  labelExtractor: ({ test1 }) => test1,
  data: fakeData,
  allowClear: true,
  placeholder: "Select Item...",
  multiple: true,
};
