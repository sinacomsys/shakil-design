import { faker } from "@faker-js/faker";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useEffect, useMemo, useState } from "react";
import { Table } from "../../../organism/Table";
import { StoryContainer } from "../../container";
import React from "react";
import { ColumnType } from "../../../organism/Table/column";
import { Text } from "../../../atoms";
export default {
  title: "table/Regular",
  component: Table,
} as Meta<any>;

interface DataType {
  name: string;
  family: string;
  age: number;
  city: string;
  country: string;
  address: string;
  id: string;
}

const Template: Story<any> = () => {
  const [test, setTest] = useState<string | undefined>(undefined);
  const mockData = useMemo(() => {
    return [...new Array(50)].map((_, index) => {
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
  }, []);

  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    setData(mockData);
  }, [mockData]);

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
          return <Text size={13}>{address}</Text>;
        },
        renderExpandRow() {
          return <div style={{ height: 200, border: "1px solid red" }}></div>;
        },
        align: "start",
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
        ellipsis: true,
        render({ row: { city } }) {
          return <Text size={14}>{city}</Text>;
        },
      },
      {
        dataIndex: "country",
        title: "Alarm Severity",
        ellipsis: true,
        render() {
          return (
            <Text ellipsis>
              dsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </Text>
          );
        },
      },
      {
        dataIndex: "family",
        title: "alarm type",
        render({ row: { family } }) {
          return (
            <Text ellipsis size={14}>
              {family}
            </Text>
          );
        },
      },
    ];
  }, []);

  return (
    <StoryContainer>
      <Table
        selectedRow={test}
        mode="single"
        rowKey="id"
        height={350}
        coloums={columns}
        data={data}
        // endOfList={<div style={{ backgroundColor: "red" }}>end of list</div>}
        onSelectRow={(id) => {
          setTest(id.id);
        }}
      />
    </StoryContainer>
  );
};

export const BaseTable = Template.bind({});
