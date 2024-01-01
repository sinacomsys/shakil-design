import { VirtualItem } from "@tanstack/react-virtual";
import { CheckBox } from "../../../molecules/checkbox";
import { Cell } from "../cell";
import { ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { Row } from "../row";
import { useStyles } from "./style";
import { LegacyRef } from "react";

export interface RowsProps<T> {
  rowData: T;
  columns: ColumnType<T>[];
  index: number;
  virtualItem: VirtualItem;
  lastItem?: LegacyRef<HTMLTableRowElement>;
}

const Rows = <T extends Record<string, unknown>>({
  rowData,
  columns,
  index: rowIndex,
  virtualItem,
  lastItem,
}: RowsProps<T>) => {
  const { selectedRow, handleCheckRow, checkedRows, rowKey, data, mode } =
    useMyTableContext<T>();

  const classes = useStyles();

  const _selectedRow = selectedRow as T;

  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );

  return (
    <Row
      lastItem={lastItem}
      virtualItem={virtualItem}
      rowData={rowData}
      rowIndex={rowIndex}
      isSelected={Boolean(
        rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey],
      )}
      isChecked={Boolean(isChecked)}
    >
      <td style={{ height: "inherit" }}>
        {rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? (
          <div className={classes["selected"]} />
        ) : null}
        {mode === "multiple" ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              rowKey && handleCheckRow({ rowId: rowData[rowKey] });
            }}
            className={classes["check-box"]}
          >
            <CheckBox
              data-testid={rowKey ? `row-${String(rowData[rowKey])}` : rowIndex}
              checked={Boolean(isChecked)}
            />
          </div>
        ) : null}
      </td>
      {columns.map(({ dataIndex, render, align, ellipsis }, index) => {
        const cell = rowData[dataIndex as keyof typeof rowData];
        return (
          <Cell ellipsis={ellipsis} key={index} align={align}>
            <>
              {render
                ? render({
                    value: cell,
                    index: rowIndex,
                    row: rowData,
                    data: data,
                  })
                : cell}
            </>
          </Cell>
        );
      })}
    </Row>
  );
};

export { Rows };
