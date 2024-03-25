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
  const [value, setValue] = useState<Moment | undefined | null>(
    moment("1402/9/22", "jYYYY/jMM/jDD"),
  );

  return (
    <StoryContainer>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: 190 }}>
          <InputDatePicker
            onClear={() => {
              setValue(undefined);
            }}
            allowClear
            onChange={({ value }) => {
              setValue(value);
            }}
            value={value}
            isCalendarExtended={isExtended}
            handleExtendCalendar={({ status }) => {
              if (status === "extend") {
                setIsExtended(true);
              } else {
                setIsExtended(false);
              }
            }}
            calendarMode={isPersian ? "persian" : "gregorian"}
            disabled={false}
            placement="bottom"
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
