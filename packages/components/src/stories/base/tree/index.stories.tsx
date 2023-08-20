import { Meta } from "@storybook/react/types-6-0";
import { ComponentStory } from "@storybook/react";
import { Tree } from "../../../molecules";
import { StoryContainer } from "../../container";
import { TreeProps } from "../../../molecules/tree/types";
import React from "react";
export default {
  title: "tree",
  component: Tree,
} as Meta<TreeProps<any>>;

type AnyCompProps = React.ComponentProps<typeof Tree>;

const mockData: AnyCompProps["data"] = [
  {
    id: "1",
    title: "test1",
    backgroundColor: "#e3f6ee",
  },
  { id: "2", title: "data2", backgroundColor: "#e3f6ee" },
  { id: "3", title: "test3", backgroundColor: "#e3f6ee" },
  {
    id: "4",
    title: "test4",
    backgroundColor: "#e3f6ee",
    children: [
      {
        id: "4-1",
        title: "test4-1",
        backgroundColor: "#e3e6f1",
        children: [
          { id: "4-1-1", title: "test4-1-1", backgroundColor: "#959db8" },
          {
            id: "4-1-2",
            title: "test4-1-2",
            backgroundColor: "#959db8",
            children: [
              { id: "4-1-1-1", title: "test4-1-1", backgroundColor: "gray" },
              { id: "4-1-2-2", title: "test4-1-2", backgroundColor: "gray" },
            ],
          },
        ],
      },
      { id: "4-2", title: "test4-2", backgroundColor: "#e3e6f1" },
      { id: "4-3", title: "test4-3", backgroundColor: "#e3e6f1" },
    ],
  },
  { id: "5", title: "test5", backgroundColor: "#e3f6ee" },
];

const Template: ComponentStory<typeof Tree> = () => (
  <StoryContainer>
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 50,
      }}
    >
      <Tree data={mockData} />
    </div>
  </StoryContainer>
);

export const Primary = Template.bind({});

Primary.args = {
  data: mockData,
};
