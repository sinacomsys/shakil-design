import { Meta, Story } from "@storybook/react/types-6-0";
import { NodeButton, NodeButtonProps } from "../../../molecules";
import React, { useState } from "react";
import { StoryContainer } from "../../container";
export default {
  title: "node button",
  component: NodeButton,
} as Meta<NodeButtonProps>;

const Template: Story<NodeButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StoryContainer>
      <NodeButton clickHandler={handler} text={"SDfsdf"} isOpen={isOpen} />
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
