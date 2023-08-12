import { Story } from "@storybook/react/types-6-0";
import { InputDatePicker } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useState } from "react";

export default {
  title: "Input DatePicker",
  component: InputDatePicker,
};

const Template: Story<any> = () => {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <StoryContainer>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: 190 }}>
          <InputDatePicker
            isCalendarExtended={isExtended}
            handleExtendCalendar={() => {
              setIsExtended((prev) => !prev);
            }}
          />
        </div>
      </div>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
