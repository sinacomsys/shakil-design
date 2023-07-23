import { Meta, Story } from "@storybook/react/types-6-0";
import { SearchBox, SearchBoxProps } from "../../../atoms";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "search box",
  component: SearchBox,
} as Meta<SearchBoxProps>;

const Template: Story<SearchBoxProps> = () => (
  <StoryContainer>
    <SearchBox searchTitle={"sdfsdf"} searchHandler={() => {}} />
  </StoryContainer>
);

export const Primary = Template.bind({});
