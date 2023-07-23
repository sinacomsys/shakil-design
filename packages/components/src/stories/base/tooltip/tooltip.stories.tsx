import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryContainer } from "../../container";
import React from "react";
import { Tooltip, TooltipProps } from "../../../atoms";
export default {
  title: "tooltip",
  component: Tooltip,
} as Meta<TooltipProps>;

const Template: Story<TooltipProps> = () => {
  return (
    <StoryContainer>
      <Tooltip
        trigger="click"
        content={
          <div style={{ height: 250, width: 250, backgroundColor: "red" }}>
            Tooltip Content
          </div>
        }
        arrowColor={"red"}
      >
        <button style={{ marginLeft: 200 }}>hover!</button>
      </Tooltip>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
