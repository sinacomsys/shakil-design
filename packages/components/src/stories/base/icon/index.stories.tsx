import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseIcon, BaseIconProps } from "../../../atoms/baseIcon";
import React from "react";
import { Colors, ShakilDesignThemeProvider } from "../../../theme";
export default {
  title: "BaseIcon",
  component: BaseIcon,
} as Meta<BaseIconProps>;

const Template: Story<BaseIconProps> = () => (
  <ShakilDesignThemeProvider colors={Colors} unit="pixel">
    <div
      style={{
        backgroundColor: "gray",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BaseIcon
        size={{ height: 20, width: 20 }}
        name={"tool-kit"}
        color={"red"}
      />
    </div>
  </ShakilDesignThemeProvider>
);
export const Primary = Template.bind({});
