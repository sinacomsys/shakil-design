import { Meta, Story } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { Modal, ModalProps, Text } from "../../../atoms";
import { Button } from "../../../molecules";
import { StoryContainer } from "../../container";

export default {
  title: "Modal",
  component: Modal,
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => {
  const [isVisible, setVisible] = useState(false);
  const onToggleDrawer = () => {
    setVisible((prev) => !prev);
  };
  return (
    <StoryContainer>
      <Button onClick={onToggleDrawer}>toggle</Button>
      <Modal
        {...args}
        isVisible={isVisible}
        onClose={onToggleDrawer}
        destroyOnClose
      >
        <div
          style={{
            width: 300,
            height: 300,
            backgroundColor: "white",
            borderRadius: 8,
            padding: 10,
          }}
        >
          <Text>Modal Content</Text>
        </div>
      </Modal>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
