import { Story } from "@storybook/react/types-6-0";
import { DatePicker } from "../../../molecules/datepicker";
import { StoryContainer } from "../../container";
import React from "react";
import { Tooltip } from "../../../atoms";
import { Button } from "../../../molecules";
export default {
  title: "DatePicker",
  component: DatePicker,
};

const Template: Story<any> = () => (
  <StoryContainer>
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Tooltip placement="bottom" arrowColor="#575757" content={<DatePicker />}>
        <Button>Date Picker</Button>
      </Tooltip>
    </div>
  </StoryContainer>
);

export const Primary = Template.bind({});
