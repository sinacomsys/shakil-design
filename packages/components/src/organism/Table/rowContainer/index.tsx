import { VirtualItem } from "@tanstack/react-virtual";
import { CheckBox } from "../../../molecules/checkbox";
import { Cell } from "../cell";
import { ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { Row } from "../row";
import { useStyles } from "./style";
import { LegacyRef } from "react";
import classNames from "classnames";

export interface RowContainerProps<T> {
  rowData: T;
  columns: ColumnType<T>[];
  index: number;
  virtualItem: VirtualItem;
  lastItem?: LegacyRef<HTMLTableRowElement>;
}

const RowContainer = <T extends Record<string, unknown>>({
  rowData,
  columns,
  index: rowIndex,
  virtualItem,
  lastItem,
}: RowContainerProps<T>) => {
  const {
    selectedRow,
    handleCheckRow,
    checkedRows,
    rowKey,
    data,
    mode,
    expandedRows,
  } = useMyTableContext<T>();
  const classes = useStyles();
  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );
  const isExpanded = expandedRows?.find((item) => {
    if (!rowKey) return;
    return item === rowData[rowKey];
  });

  return (
    <Row
      lastItem={lastItem}
      virtualItem={virtualItem}
      rowData={rowData}
      rowIndex={rowIndex}
      isSelected={Boolean(
        rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey],
      )}
      isChecked={Boolean(isChecked)}
    >
      <td style={{ height: "inherit" }}>
        {rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey] ? (
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
      {columns.map(
        ({ dataIndex, render, align, ellipsis, renderExpandRow }, index) => {
          const cell = rowData[dataIndex as keyof typeof rowData];
          return (
            <Cell key={index}>
              <div
                className={classNames(
                  classes["cell"],
                  align === "start" && classes["start"],
                  align === "center" && classes["center"],
                  align === "end" && classes["end"],
                  ellipsis && classes["ellipsis"],
                )}
              >
                {render
                  ? render({
                      value: cell,
                      index: rowIndex,
                      row: rowData,
                      data: data,
                    })
                  : (cell as unknown as React.ReactNode)}
              </div>
              {isExpanded && renderExpandRow
                ? renderExpandRow({
                    value: cell,
                    index: rowIndex,
                    row: rowData,
                    data: data,
                  })
                : null}
            </Cell>
          );
        },
      )}
    </Row>
  );
};

export { RowContainer };
