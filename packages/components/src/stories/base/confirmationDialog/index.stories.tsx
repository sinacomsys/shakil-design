import { Meta, Story } from "@storybook/react/types-6-0";
import { ConfirmationDialog, ConfirmationDialogProps } from "../../../organism";
import { StoryContainer } from "../../container";
export default {
  title: "confirmation dialog",
  component: ConfirmationDialog,
} as Meta<ConfirmationDialogProps>;

const Template: Story<ConfirmationDialogProps> = () => {
  return (
    <StoryContainer>
      <ConfirmationDialog message="test message" title="test title">
        <div>clickme</div>
      </ConfirmationDialog>
    </StoryContainer>
  );
};

export const Primary = Template.bind({});
