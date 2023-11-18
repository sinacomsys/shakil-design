import { faker } from "@faker-js/faker";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useMemo } from "react";
import { Table } from "../../../organism/Table";
import { StoryContainer } from "../../container";
import React from "react";
import { ColumnType } from "../../../organism/Table/column";
import { Switch, Text } from "../../../atoms";
export default {
  title: "table/Regular",
  component: Table,
} as Meta<any>;

const mockData = [...new Array(10000)].map((_, index) => {
  return {
    name: faker.name.firstName(),
    family: faker.name.lastName(),
    age: index,
    city: faker.address.cityName(),
    country: faker.address.country(),
    address: "test address",
    id: `${index}`,
  };
});

const Template: Story<any> = () => {
  const columns = useMemo((): ColumnType<{
    name: string;
    family: string;
    age: number;
    city: string;
    country: string;
    address: string;
    id: string;
  }>[] => {
    return [
      {
        dataIndex: "address",
        title: "Acknowledge Status",
        render({ row: { address } }) {
          return (
            <div style={{ width: 50, height: 10, backgroundColor: "red" }}>
              <Text size={13}>{address}</Text>
            </div>
          );
        },
      },
      {
        dataIndex: "age",
        title: "Alarm Cause",
        render({ row: { age } }) {
          return <Text size={14}>{age}</Text>;
        },
      },
      {
        dataIndex: "city",
        title: "Time",
      },
      {
        dataIndex: "country",
        title: "Alarm Severity",
        render({ row: { country } }) {
          return <Text size={13}>{country}</Text>;
        },
      },
      {
        dataIndex: "family",
        title: "alarm type",
        render({ row: { family } }) {
          return <Text size={14}>{family}</Text>;
        },
        renderFilter() {
          return <Switch />;
        },
      },
    ];
  }, []);

  return (
    <StoryContainer>
      <Table
        onRow={() => {
          return {
            onClick: (e) => {
              // eslint-disable-next-line no-console
              console.log(e);
            },
            onMouseLeave: (e) => {
              // eslint-disable-next-line no-console
              console.log(e);
            },
          };
        }}
        rowKey="id"
        onSelectRow={() => {}}
        height={400}
        coloums={columns}
        data={mockData}
      />
    </StoryContainer>
  );
};

export const BaseTable = Template.bind({});
