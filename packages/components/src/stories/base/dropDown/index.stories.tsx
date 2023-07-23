import { faker } from "@faker-js/faker";
import { Story } from "@storybook/react/types-6-0";
import { DropDown } from "../../../organism";
import { Text } from "../../../atoms";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "drop down",
  component: DropDown,
};

const mockData = [...new Array(3)].map((_, index) => {
  return {
    label: faker.name.lastName(),
    value: `${index}id`,
  };
});

const Template: Story<any> = () => (
  <StoryContainer>
    <div style={{ padding: 30 }}>
      <DropDown trigger="click" items={mockData}>
        <Text>DropDown</Text>
      </DropDown>
    </div>
  </StoryContainer>
);

export const Primary = Template.bind({});
