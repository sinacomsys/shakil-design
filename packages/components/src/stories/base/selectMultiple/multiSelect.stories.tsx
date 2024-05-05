import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import { isInclude } from "@shakil-design/utils";

export default {
  title: "multiSelect",
  component: Select,
} as Meta<any>;

const fakeData = [...new Array(15)].map((_, index) => {
  return {
    test: index,
    test1: `Test Label${index}`,
  };
});

const Template: Story<any> = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <StoryContainer>
      <div style={{ width: 300 }}>
        <Select
          className="test-classname"
          testid={{ input: "sdfsd", overlay: "sdfsdfdddd12" }}
          value={value}
          data={fakeData}
          allowClear
          placeholder="Select Item..."
          errorMessage="Error Message!"
          mode="multi"
          valueExtractor={({ test }) => test}
          labelExtractor={({ test1 }) => test1}
          onChange={(value) => {
            setValue(value?.map((value) => value) as string[]);
          }}
          onFilter={({ data, searchedValue }) => {
            return {
              filterdData: data?.filter((item) => {
                return isInclude(item.test1, searchedValue);
              }),
            };
          }}
        />
      </div>
    </StoryContainer>
  );
};

export const SingleSelect = Template.bind({});
