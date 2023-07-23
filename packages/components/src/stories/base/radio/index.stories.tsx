import { Meta, Story } from "@storybook/react/types-6-0";
import { Text } from "../../../atoms";
import { Radio, RadioProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React from "react";
export default {
  title: "radio",
  component: Radio,
} as Meta<RadioProps>;

const Template: Story<RadioProps> = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <StoryContainer>
      <Radio.Group
        name="sag"
        onBlur={(e) => {
          // eslint-disable-next-line no-console
          console.log(e, "blur");
        }}
        onFocus={(e) => {
          // eslint-disable-next-line no-console
          console.log(e, "focus");
        }}
        onChange={onChangeHandler}
        value="1"
      >
        <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
          <Radio size={14} value={"1"}>
            <Text size={14}>Radio 1</Text>
          </Radio>
          <Radio size={14} value={"2"}>
            <Text size={14}>Radio 2</Text>
          </Radio>
          <Radio size={14} value={"3"}>
            <Text size={14}>Radio 3</Text>
          </Radio>
          <Radio size={14} value={"4"}>
            <Text size={14}>Radio 4</Text>
          </Radio>
        </div>
      </Radio.Group>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
