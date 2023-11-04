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
    renderBackgroundColor: () => {
      return "#e3f6ee";
    },
    renderItemContent() {
      return <div style={{ backgroundColor: "red", height: "100%" }}>Test</div>;
    },
  },
  {
    id: "2",
    title: "data2",
    renderBackgroundColor: () => {
      return "#e3f6ee";
    },
  },
  {
    id: "3",
    title: "test3",
    renderBackgroundColor: () => {
      return "#e3f6ee";
    },
  },
  {
    id: "4",
    title: "test4",
    renderBackgroundColor: () => {
      return "#e3f6ee";
    },
    renderItemContent() {
      return <div style={{ backgroundColor: "red", height: "100%" }}>Test</div>;
    },
    children: [
      {
        id: "4-1",
        title: "test4-1",
        renderBackgroundColor: () => {
          return "#e3e6f1";
        },
        renderStatusColor: () => {
          return (
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "red" }}
            />
          );
        },
        children: [
          {
            id: "4-1-1",
            title: "test4-1-1",
            renderBackgroundColor: () => {
              return "#959db8";
            },
          },
          {
            id: "4-1-2",
            title: "test4-1-2",
            renderBackgroundColor: () => {
              return "#959db8";
            },
            children: [
              {
                id: "4-1-1-1",
                title: "test4-1-1",
                renderBackgroundColor: () => {
                  return "gray";
                },
              },
              {
                id: "4-1-2-2",
                title: "test4-1-2",
                renderBackgroundColor: () => {
                  return "gray";
                },
              },
            ],
          },
        ],
      },
      {
        id: "4-2",
        title: "test4-2",
        renderBackgroundColor: () => {
          return "#e3e6f1";
        },
      },
      {
        id: "4-3",
        title: "test4-3",
        renderBackgroundColor: () => {
          return "#e3e6f1";
        },
      },
    ],
  },
  {
    id: "5",
    title: "test5",
    renderBackgroundColor: () => {
      return "#e3f6ee";
    },
  },
];

const Template: ComponentStory<typeof Tree> = (args) => (
  <StoryContainer>
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 20,
      }}
    >
      <Tree {...args} />
    </div>
  </StoryContainer>
);

export const ViewportUnit = Template.bind({});
export const PixelUnit = Template.bind({});

ViewportUnit.args = {
  data: mockData,
  unit: "viewport",
};

PixelUnit.args = {
  data: mockData,
  unit: "pixel",
};
