import { Meta, Story } from "@storybook/react/types-6-0";
import { Collapse, CollapseProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";

const { Panel } = Collapse;

export default {
  title: "collapse/accordion",
  component: Collapse,
} as Meta<CollapseProps>;

const Template: Story<CollapseProps> = () => {
  return (
    <StoryContainer>
      <Collapse
        accordion
        onChange={(value) => {
          // eslint-disable-next-line no-console
          console.log(value);
        }}
      >
        <Panel id="1" title={"General info1"}>
          <div style={{ height: 300, backgroundColor: "yellow" }}>panel 1</div>
        </Panel>
        <Panel id="2" title={"General info2"}>
          <div style={{ height: 200, backgroundColor: "red" }}>panel 2</div>
        </Panel>
        <Panel id="3" title={"General info3"}>
          <div style={{ height: 100, backgroundColor: "purple" }}>panel 3</div>
        </Panel>
      </Collapse>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
