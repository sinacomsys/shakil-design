import { Meta, Story } from "@storybook/react/types-6-0";
import { Select, SingleSelectProps } from "../../../organism/select";
import { StoryContainer } from "../../container";
import React, { useState } from "react";

export default {
  title: "multiSelect",
  component: Select,
} as Meta<any>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    test: index,
    test1: `Test Label${index}`,
  };
});

const Template: Story<any> = () => {
  const [value, setValue] = useState<string[]>([]);
  console.log({ value });

  return (
    <StoryContainer>
      <div style={{ width: 300 }}>
        <Select
          value={value}
          data={fakeData}
          allowClear
          placeholder="Select Item..."
          errorMessage="Error Message!"
          mode="multi"
          valueExtractor={({ test }) => test}
          labelExtractor={({ test1 }) => test1}
          onChange={(value) => {
            setValue(value.map((value) => value) as string[]);
          }}
        />
      </div>
    </StoryContainer>
  );
};

export const SingleSelect = Template.bind({});
