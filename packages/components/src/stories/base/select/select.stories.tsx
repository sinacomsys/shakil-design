import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { SelectProps } from "../../../organism/select/types";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import { Button } from "../../../molecules";

export default {
  title: "select",
  component: Select,
} as Meta<SelectProps>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    test: `TestValue${index}`,
    test1: `Test Labelwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww${index}`,
  };
});

const Template: Story<SelectProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StoryContainer>
      <div style={{ width: 300 }}>
        <Select {...args} isLoading={isLoading} />
      </div>

      <Button
        style={{ marginTop: 30 }}
        onClick={() => {
          setIsLoading(true);
        }}
      >
        loading
      </Button>
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
  errorMessage: "Error Message!",
};

MultipleSelect.args = {
  unit: "viewport",
  valueExtractor: ({ test }) => test,
  labelExtractor: ({ test1 }) => test1,
  data: fakeData,
  allowClear: true,
  placeholder: "Select Item...",
  multiple: true,
};
