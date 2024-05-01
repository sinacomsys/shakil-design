import { Meta, Story } from "@storybook/react/types-6-0";
import { useRef, useState } from "react";
import { Switch, SwitchProps } from "../../../atoms";
import { StoryContainer } from "../../container";
import { Text } from "../../../atoms";

import React from "react";
export default {
  title: "switch",
  component: Switch,
} as Meta<SwitchProps>;

const Template: Story<SwitchProps> = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked);
  };
  const clickToFocus = () => {
    ref.current?.focus();
  };

  return (
    <StoryContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text>sdfsdf</Text>
        <Switch ref={ref} onChange={handleOnClick} checked={isCheck} />
      </div>
      <div style={{ marginTop: 50 }}>
        <button onClick={clickToFocus}>click to focus!</button>
      </div>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
