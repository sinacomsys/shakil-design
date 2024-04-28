import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, TextInput, TextInputProps } from "../../../molecules";
import { StoryContainer } from "../../container";
import React, { useEffect, useState } from "react";
import { BaseIcon } from "../../../atoms";

export default {
  title: "text input",
  component: TextInput,
} as Meta<TextInputProps>;

const Template: Story<TextInputProps> = (args) => {
  const [value, setValue] = useState<string | number>(
    args.value ? args.value : "",
  );
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
        {...args}
        // type="password"
        errorMessage="sag"
        isLoading={isLoading}
        onClear={onClear}
        value={value}
        onChangeText={setValue}
        wrapperStyle={{ marginBottom: 30, width: "200px" }}
        theme="Regular"
        allowClear
        data-testid={"sag"}
        // disabled
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
export const LoginTextInput = Template.bind({});

Active.args = {
  value: "text input value",
  AddonAfter: (
    <BaseIcon name="Search-Box_Search-Icon" size={{ height: 15, width: 15 }} />
  ),
};

LoginTextInput.args = {
  placeholder: "placeholder value",
  // placeholderTextColor: '#7686b7',
  addonBefore: (
    <span
      style={{
        color: "#00ff00",
        borderRight: "solid 1px #abb6d6",
        paddingRight: 7,
        paddingTop: 4,
      }}
    >
      <BaseIcon
        name="Abstract-Service-Graph_Hamburger-Menu"
        size={{ height: 15, width: 15 }}
        color="#abb6d6"
      />
    </span>
  ),
};
