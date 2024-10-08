import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { StoryContainer } from "../../container";
import React from "react";

export default {
  title: "singleSelect",
  component: Select,
} as Meta<any>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    test: 1,
    test1: `Test Label${index}`,
  };
});

const Template: Story<any> = () => {
  return (
    <StoryContainer>
      <div style={{ width: 300 }}>
        <Select
          onChange={(value) => {}}
          valueExtractor={({ test }) => test}
          labelExtractor={({ test1 }) => test1}
          data={fakeData}
          allowClear
          placeholder="Select Item..."
          errorMessage="Error Message!"
          mode="single"
        />
      </div>
    </StoryContainer>
  );
};

export const SingleSelect = Template.bind({});
