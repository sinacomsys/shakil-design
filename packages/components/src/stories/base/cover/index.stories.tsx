import { Story } from "@storybook/react/types-6-0";
import { Cover } from "../../../molecules";
import { StoryContainer } from "../../container";
export default {
  title: "cover",
  component: Cover,
};

const Template: Story<any> = () => (
  <StoryContainer>
    <Cover />
  </StoryContainer>
);

export const Primary = Template.bind({});
