import { Meta, Story } from "@storybook/react/types-6-0";
import { useRef, useState } from "react";
import { Drawer, DrawerProps, Text } from "../../../atoms";
import { Button } from "../../../molecules";
import { Select } from "../../../organism";
import { StoryContainer } from "../../container";
import React from "react";

export default {
  title: "drawer",
  component: Drawer,
} as Meta<DrawerProps>;

const fakeData = [...new Array(35)].map((_, index) => {
  return {
    value: `TestValue${index}`,
    label: `Test Label${index}`,
  };
});

const Template: Story<DrawerProps> = (args) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);
  const onToggleDrawer = () => {
    setVisible((prev) => !prev);
  };
  return (
    <StoryContainer>
      <div
        ref={ref}
        style={{
          height: 500,
          border: "1px solid red",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Button onClick={onToggleDrawer}>toggle</Button>
        <Drawer
          {...args}
          isVisible={isVisible}
          onClose={onToggleDrawer}
          height={200}
          getContainer={ref.current}
        >
          <div style={{ height: "100%" }}>
            <Select unit="pixel" data={fakeData} />
            <Text>Drawer Content</Text>
          </div>
        </Drawer>
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: "add",
  mode: "primary",
};
