import { Story } from "@storybook/react/types-6-0";
import { DatePicker } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "DatePicker",
  component: DatePicker,
};

const Template: Story<any> = () => (
  <StoryContainer>
    <DatePicker />
  </StoryContainer>
);

export const Primary = Template.bind({});
