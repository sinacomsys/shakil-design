import { Story } from "@storybook/react/types-6-0";
import { Button, InputDatePicker } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import moment, { Moment } from "moment-jalaali";

export default {
  title: "Input DatePicker",
  component: InputDatePicker,
};

const Template: Story<any> = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [isPersian, setPersian] = useState(true);
  const [value, setValue] = useState<Moment | undefined>(
    moment("1402/9/22", "jYYYY/jMM/jDD"),
  );
  const onValueChange = (date: Moment | null | undefined) => {
    setValue(date as Moment);
  };
  return (
    <StoryContainer>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: 190 }}>
          <InputDatePicker
            onClear={() => {
              setValue(undefined);
            }}
            allowClear
            onChange={onValueChange}
            value={value}
            isCalendarExtended={isExtended}
            handleExtendCalendar={() => {
              setIsExtended((prev) => !prev);
            }}
            calendarMode={isPersian ? "persian" : "gregorian"}
          />
        </div>
        <Button
          onClick={() => {
            setPersian((prev) => !prev);
          }}
        >
          change mode
        </Button>
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
