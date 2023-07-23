import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryContainer } from "../../container";
import { NoContent, NoContentProps } from "../../../molecules";
import React from "react";
export default {
  title: "no content",
  component: NoContent,
} as Meta<NoContentProps>;

const Template: Story<NoContentProps> = () => {
  return (
    <StoryContainer>
      <NoContent text="There is No Content!" />
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
