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

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: "add",
  mode: "primary",
};

Secondary.args = {
  children: "cancel",
  mode: "secondary",
};
