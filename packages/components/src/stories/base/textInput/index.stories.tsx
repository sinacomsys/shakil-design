import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useEffect, useState } from "react";
import { BaseIcon } from "../../../atoms";
export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = () => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  const onClear = () => {
    setValue("");
  };
  return (
    <StoryContainer>
      <TextInput
        isLoading={isLoading}
        onClear={onClear}
        value={value}
        onChangeText={setValue}
        wrapperStyle={{ marginBottom: 30, width: "200px" }}
        theme="Regular"
        allowClear
        AddonAfter={
          <BaseIcon
            name="Search-Box_Search-Icon"
            size={{ height: 15, width: 15 }}
          />
        }
        clearIconColor="red"
      />
      <Button
        style={{ marginTop: 30 }}
        onClick={() => {
          setIsLoading(true);
        }}
      >
        loading
      </Button>
    </StoryContainer>
  );
};

export const Active = Template.bind({});
