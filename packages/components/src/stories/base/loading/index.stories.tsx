import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Loading, LoadingProps } from "../../../atoms";
import { StoryContainer } from "../../container";
export default {
  title: "loading",
  component: Loading,
} as Meta<LoadingProps>;

const Template: Story<LoadingProps> = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <StoryContainer>
      <div>
        <div style={{ width: 300 }}>
          <Loading isLoading={isLoading} size="small">
            <div style={{ height: 200, border: "1px solid red" }}>
              <button>sdfsdf</button>
              test text
            </div>
          </Loading>
        </div>

        <button
          style={{ marginTop: 30 }}
          onClick={() => {
            setLoading((prev) => !prev);
          }}
        >
          click me!
        </button>
      </div>
      <div style={{ marginTop: 30 }}>
        <Loading isLoading={true} size={"large"} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Loading isLoading={true} size={"medium"} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Loading isLoading={true} size={"small"} />
      </div>
    </StoryContainer>
  );
};

export const WithContainer = Template.bind({});
