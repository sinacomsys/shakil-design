import { Meta, Story } from "@storybook/react/types-6-0";
import React, { useRef, useState } from "react";
import { Modal, ModalProps, Text } from "../../../atoms";
import { Button } from "../../../molecules";
import { StoryContainer } from "../../container";

export default {
  title: "Modal",
  component: Modal,
} as Meta<ModalProps>;

const Template: Story<ModalProps> = (args) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onToggleDrawer = () => {
    setVisible((prev) => !prev);
  };
  return (
    <StoryContainer>
      <Button style={{ marginBottom: 100 }} onClick={onToggleDrawer}>
        toggle
      </Button>
      <div
        ref={ref}
        style={{
          width: 500,
          height: 500,
          border: "1px solid red",
          borderRadius: 5,
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
      <Modal
        {...args}
        isVisible={isVisible}
        onClose={onToggleDrawer}
        destroyOnClose={true}
        getContainer={ref.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
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
