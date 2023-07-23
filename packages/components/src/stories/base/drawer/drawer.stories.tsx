import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Drawer, DrawerProps, Text } from "../../../atoms";
import { Button } from "../../../molecules";
import { StoryContainer } from "../../container";
export default {
  title: "drawer",
  component: Drawer,
} as Meta<DrawerProps>;

const Template: Story<DrawerProps> = (args) => {
  const [isVisible, setVisible] = useState(false);
  const onToggleDrawer = () => {
    setVisible((prev) => !prev);
  };
  return (
    <StoryContainer>
      <Button onClick={onToggleDrawer}>toggle</Button>
      <Drawer {...args} isVisible={isVisible} onClose={onToggleDrawer}>
        <Text>Drawer Content</Text>
      </Drawer>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: "add",
  mode: "primary",
};
