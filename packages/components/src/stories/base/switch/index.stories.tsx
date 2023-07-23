import { Meta, Story } from "@storybook/react/types-6-0";
import { useRef, useState } from "react";
import { Switch, SwitchProps } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "switch",
  component: Switch,
} as Meta<SwitchProps>;

const Template: Story<SwitchProps> = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const handleOnClick = (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log({ checked });
    setIsCheck(checked);
  };
  const clickToFocus = () => {
    ref.current?.focus();
  };

  return (
    <StoryContainer>
      <Switch ref={ref} onChange={handleOnClick} checked={isCheck} />
      <div style={{ marginTop: 50 }}>
        <button onClick={clickToFocus}>click to focus!</button>
      </div>
    </StoryContainer>
  );
};

export const RadioGroup = Template.bind({});
