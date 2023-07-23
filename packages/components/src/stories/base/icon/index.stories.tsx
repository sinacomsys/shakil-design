import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIcon, BaseIconProps } from "../../../atoms/baseIcon";
import React from "react";
export default {
  title: "BaseIcon",
  component: BaseIcon,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = () => (
  <div
    style={{
      backgroundColor: "gray",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BaseIcon size={{ height: 48, width: 60 }} unit={"pixel"} name={"Modem"} />
  </div>
);
export const Primary = Template.bind({});
