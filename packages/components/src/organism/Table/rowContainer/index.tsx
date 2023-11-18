import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme";
import { Cell } from "../cell";
import { ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { Row } from "../row";

export interface RowsProps<T> {
  rowData: T;
  data: T[];
  columns: ColumnType<T>[];
  index: number;
  rowKey?: keyof T;
  checkedRows: T[];
  handleCheckRow: (value: { rowId: T[keyof T] }) => void;
}

const Rows = <T extends Record<string, unknown>>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
  checkedRows,
  handleCheckRow,
}: RowsProps<T>) => {
  const { table: { selectedRowBookmark } = {} } = useTheme();
  const {
    selectedRow,
    onSelectRow,
    isOnCheckedRowsAvailable,
    isSelectSingleRowAvailable,
  } = useMyTableContext();
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
          <div
            style={{
              position: "relative",
              height: "100%",
              borderInlineStart: `5px solid ${selectedRowBookmark}`,
            }}
          />
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
