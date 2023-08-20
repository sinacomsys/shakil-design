import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../../../molecules";
import { StoryContainer } from "../../container";
export default {
  title: "button/regularButton",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  return (
    <StoryContainer>
      <Button {...args} />
    </StoryContainer>
  );
};

export const Main = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const MainGhost = Template.bind({});
export const DangerGhost = Template.bind({});
export const SuccessGhost = Template.bind({});

Main.args = {
  children: "add",
  mode: "main",
};

Success.args = {
  children: "cancel",
  mode: "success",
};

Danger.args = {
  children: "cancel",
  mode: "danger",
};

DangerGhost.args = {
  children: "cancel",
  mode: "danger",
  ghost: true,
};

SuccessGhost.args = {
  children: "cancel",
  mode: "success",
  ghost: true,
};

MainGhost.args = {
  children: "cancel",
  mode: "main",
  ghost: true,
  unit: "viewport",
};
