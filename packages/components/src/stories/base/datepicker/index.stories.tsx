import { Story } from "@storybook/react/types-6-0";
import { DatePicker } from "../../../molecules/datepicker";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import { Tooltip } from "../../../atoms";
import { Button, RangePickerPanel } from "../../../molecules";
import moment, { Moment } from "moment-jalaali";
export default {
  title: "DatePicker",
  component: DatePicker,
};

const Template: Story<any> = () => {
  const [date, setDate] = useState<Moment | null | undefined>(moment());
  const [range, setRange] = useState<{
    from: Moment | null | undefined;
    to: Moment | null | undefined;
  }>({
    from: null,
    to: moment("1403/10/30", "jYYYY/jMM/jDD"),
  });

  return (
    <StoryContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          columnGap: 50,
        }}
      >
        <Tooltip
          placement="bottom"
          arrowColor="#575757"
          content={
            <DatePicker
              value={date}
              onChange={({ value }) => {
                setDate(value);
              }}
              calendarMode="gregorian"
            />
          }
          trigger="click"
        >
          <Button>Date Picker</Button>
        </Tooltip>

        <Tooltip
          placement="bottom"
          arrowColor="#575757"
          content={
            <RangePickerPanel
              calendarMode="gregorian"
              value={{ from: range.from, to: range.to }}
              onChange={({ from, to }) => {
                console.log(from?.format("jYYYY/jMM/jDD HH:mm"));
                setRange({ from, to });
              }}
            />
          }
          trigger="click"
        >
          <Button>Range Picker</Button>
        </Tooltip>
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
