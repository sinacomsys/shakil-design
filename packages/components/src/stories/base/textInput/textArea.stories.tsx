import { Meta, Story } from "@storybook/react/types-6-0";
import { TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useState } from "react";
export default {
  title: "text area",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => {
  const [value, setValue] = useState<string>("");

  return (
    <StoryContainer>
      <TextInput
        value={value}
        onChangeText={setValue}
        wrapperStyle={{ marginBottom: 30, width: "200px" }}
        theme="Regular"
        multiline
        numberOfLines={5}
      />
    </StoryContainer>
  );
};

export const Active = Template.bind({});
