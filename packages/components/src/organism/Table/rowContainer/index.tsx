import { VirtualItem } from "@tanstack/react-virtual";
import { CheckBox } from "../../../molecules/checkbox";
import { Cell } from "../cell";
import { ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { Row } from "../row";
import { useStyles } from "./style";

export interface RowsProps<T> {
  rowData: T;
  data: T[];
  columns: ColumnType<T>[];
  index: number;
  rowKey?: keyof T;
  checkedRows: T[];
  virtualItem: VirtualItem;
}

const Rows = <T extends Record<string, unknown>>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
  checkedRows,
  virtualItem,
}: RowsProps<T>) => {
  const {
    selectedRow,
    onSelectRow,
    isOnCheckedRowsAvailable,
    isSelectSingleRowAvailable,
    handleCheckRow,
  } = useMyTableContext<T>();

  const classes = useStyles();

  const _selectedRow = selectedRow as T;

  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );

  const onClickRow = () => {
    if (!isOnCheckedRowsAvailable && isSelectSingleRowAvailable) {
      onSelectRow?.(rowData);
    }
    if (isOnCheckedRowsAvailable && rowKey) {
      handleCheckRow({ rowId: rowData[rowKey] });
    }
  };

  return (
    <Row
      virtualItem={virtualItem}
      rowData={rowData}
      rowKey={rowKey}
      rowIndex={rowIndex}
      isOnCheckedRowsAvailable={isOnCheckedRowsAvailable}
      isSelected={Boolean(
        rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey],
      )}
      onClick={onClickRow}
      isChecked={Boolean(isChecked)}
    >
      <td style={{ height: "inherit" }}>
        {rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? (
          <div className={classes["selected"]} />
        ) : null}
        {isOnCheckedRowsAvailable ? (
          <div style={{ paddingInlineStart: 8 }}>
            <CheckBox
              onChange={() => {
                rowKey && handleCheckRow({ rowId: rowData[rowKey] });
              }}
              checked={Boolean(isChecked)}
            />
          </div>
        ) : null}
      </td>
      {columns.map(({ dataIndex, render, align }, index) => {
        const cell = rowData[dataIndex as keyof typeof rowData];
        return (
          <Cell key={index} align={align}>
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
