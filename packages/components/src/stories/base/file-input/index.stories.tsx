import { Meta, Story } from "@storybook/react/types-6-0";
import { FileInput, FileInputProps } from "../../../molecules";
import React from "react";
export default {
  title: "file input",
  component: FileInput,
} as Meta<FileInputProps>;

const Template: Story<FileInputProps> = () => <FileInput />;

export const Primary = Template.bind({});
