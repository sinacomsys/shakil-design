import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Button, ButtonProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "button/buttonWithLoading",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  const [isLoading, setLoading] = useState(false);

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <StoryContainer>
      <Button {...args} onClick={enterLoading} isLoading={isLoading} />
    </StoryContainer>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: "add",
  mode: "primary",
};
