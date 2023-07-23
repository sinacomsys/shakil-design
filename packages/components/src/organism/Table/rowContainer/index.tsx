import { useContext } from "react";
import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme/context";
import { Cell } from "../cell";
import { ColumnType } from "../column";
import { TableContext } from "../context";
import { Row } from "../row";

interface RowContainer<T> {
  rowData: T;
  data: T[];
  columns: ColumnType<T>[];
  index: number;
  rowKey?: keyof T;
  isOnCheckedRowsAvailable: boolean;
  checkedRows: T[];
  handleCheckRow: (value: { rowId: T[keyof T] }) => void;
}

const RowContainer = <T extends Record<string, unknown>>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
  isOnCheckedRowsAvailable,
  checkedRows,
  handleCheckRow,
}: RowContainer<T>) => {
  const { color_secondary_1 } = useTheme();
  const { selectedRow, onSelectRow } = useContext(TableContext);
  const _selectedRow = selectedRow as T;

  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );

  const handleOnSelectSingleRow = () => {
    if (isOnCheckedRowsAvailable) return;
    onSelectRow?.(rowData);
  };

  return (
    <Row
      isOnCheckedRowsAvailable={isOnCheckedRowsAvailable}
      isSelected={Boolean(
        rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey],
      )}
      onClick={handleOnSelectSingleRow}
      isChecked={Boolean(isChecked)}
    >
      <td style={{ height: "inherit" }}>
        {rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? (
          <div
            style={{
              position: "relative",
              height: "100%",
              borderInlineStart: `5px solid ${color_secondary_1}`,
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

export { RowContainer };
