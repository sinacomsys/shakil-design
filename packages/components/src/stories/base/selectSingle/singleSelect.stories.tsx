import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { SelectProps } from "../../../organism/select/types";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import { Button } from "../../../molecules";

export default {
  title: "singleSelect",
  component: Select,
} as Meta<any>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    test: `TestValue${index}`,
    test1: `Test Label${index}`,
  };
});

const Template: Story<any> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StoryContainer>
      <div style={{ width: 300 }}>
        <Select
          unit="pixel"
          valueExtractor={({ test }) => test}
          labelExtractor={({ test1 }) => test1}
          data={fakeData}
          allowClear
          placeholder="Select Item..."
          errorMessage="Error Message!"
          mode="single"
        />
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
