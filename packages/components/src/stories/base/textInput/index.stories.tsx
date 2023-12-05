import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
import { BaseIcon } from "../../../atoms";
export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => {
  const [value, setValue] = useState<string>("");
  const onClear = () => {
    setValue("");
  };
  return (
    <StoryContainer>
      <Button
        style={{ marginBottom: 30 }}
        onClick={() => {
          setValue("");
        }}
      >
        onClear
      </Button>
      <TextInput
        onClear={onClear}
        value={value}
        onChangeText={setValue}
        wrapperStyle={{ marginBottom: 30, width: "300px" }}
        theme="Regular"
        allowClear
        AddonAfter={
          <BaseIcon
            name="Search-Box_Search-Icon"
            size={{ height: 15, width: 15 }}
          />
        }
      />
    </StoryContainer>
  );
};

export const Active = Template.bind({});
