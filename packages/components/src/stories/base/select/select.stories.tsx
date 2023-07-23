import { Meta, Story } from "@storybook/react/types-6-0";
import { Select } from "../../../organism/select";
import { SelectProps } from "../../../organism/select/types";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "select",
  component: Select,
} as Meta<SelectProps>;

const Template: Story<SelectProps> = () => (
  <StoryContainer>
    <Select disabled data={[{ label: "sdf", value: "sdfsdfsdf" }]} />
  </StoryContainer>
);

export const Primary = Template.bind({});
