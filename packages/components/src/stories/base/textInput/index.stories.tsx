import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => {
  const [value, setValue] = useState<string>("");
  return (
    <StoryContainer>
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        onClear
      </Button>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{ marginBottom: 30 }}
        theme="bold"
      />
      <TextInput disabled value={"sdfsdf"} />
    </StoryContainer>
  );
};

export const Active = Template.bind({});
