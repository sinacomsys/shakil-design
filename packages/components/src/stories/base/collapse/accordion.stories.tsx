import { Meta, Story } from "@storybook/react/types-6-0";
import { Collapse, CollapseProps } from "../../../molecules";
import { StoryContainer } from "../../container";

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
          <div style={{ height: 300, backgroundColor: "yellow" }}>sag</div>
        </Panel>
        <Panel id="2" title={"General info2"}>
          <div style={{ height: 200, backgroundColor: "red" }}>sag2</div>
        </Panel>
        <Panel id="3" title={"General info3"}>
          <div style={{ height: 100, backgroundColor: "purple" }}>sag3</div>
        </Panel>
      </Collapse>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
