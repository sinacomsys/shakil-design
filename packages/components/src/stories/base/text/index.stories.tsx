import { Meta, Story } from "@storybook/react/types-6-0";
import { Text, TextProps } from "../../../atoms/text";
export default {
  title: "BaseText",
  component: Text,
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => <Text {...args}>Test Text</Text>;

export const BoldItalic = Template.bind({});
export const Book = Template.bind({});
export const BookItalic = Template.bind({});
export const Eight = Template.bind({});
BoldItalic.args = {
  theme: "BoldItalic",
  color: "blue",
  size: 20,
};
Book.args = {
  theme: "Book",
  color: "red",
  size: 20,
};
BookItalic.args = {
  theme: "BookItalic",
  color: "black",
  size: 20,
};
Eight.args = {
  theme: "Eight",
  color: "gray",
  size: 20,
};
