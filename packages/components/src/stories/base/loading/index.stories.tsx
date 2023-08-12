import { Meta, Story } from "@storybook/react/types-6-0";
import { Spinner, SpinnerProps } from "../../../atoms";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "loading",
  component: Spinner,
} as Meta<SpinnerProps>;

const Template: Story<SpinnerProps> = () => {
  return (
    <StoryContainer>
      <div style={{ marginTop: 30 }}>
        <Spinner size={"large"} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Spinner size={"large"} unit="pixel" />
      </div>
      <div style={{ marginTop: 30 }}>
        <Spinner size={"medium"} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Spinner size={"small"} />
      </div>
    </StoryContainer>
  );
};

export const WithContainer = Template.bind({});
