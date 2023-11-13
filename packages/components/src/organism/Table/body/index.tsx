import { VirtualItem } from "react-virtual";
import { useStyles } from "./style";
import { pxToVwString } from "@shakil-design/utils";
import { Rows } from "../rowContainer";
import { TableProps } from "..";
import { UnitContext } from "../../../theme/context";
import { useContext } from "react";
import { TableContext } from "../context";

interface TableBodyProps<T extends Record<string, any>>
  extends Pick<TableProps<T>, "coloums" | "rowKey" | "data"> {
  virtualPaddingTop: number;
  virtualPaddingBottom: number;
  virtualRows: VirtualItem[];
  noContent: React.ReactNode;
  searchIconWidth: number | string;
  dataList: T[];
  checkedRows: T[];
  handleCheckRow: (arg: { rowId: T[keyof T] }) => void;
  colWidth: number | string | undefined;
}

const TableBody = <T extends Record<string, any>>({
  virtualPaddingTop,
  virtualRows,
  virtualPaddingBottom,
  noContent,
  searchIconWidth,
  dataList,
  coloums,
  rowKey,
  data,
  checkedRows,
  handleCheckRow,
  colWidth,
}: TableBodyProps<T>) => {
  const classes = useStyles();
  const { unit } = useContext(UnitContext);
  const { testid } = useContext(TableContext);

  return (
    <>
      {virtualRows.length > 0 ? (
        <table className={classes["table"]} role={"table"}>
          <colgroup>
            <col style={{ width: searchIconWidth }} />
            {coloums.map(({ width, dataIndex }) => {
              const _width =
                unit === "viewport" && width ? pxToVwString(width) : width;
              return (
                <col
                  key={dataIndex as string}
                  style={{ width: _width ? _width : colWidth }}
                />
              );
            })}
          </colgroup>
          <tbody data-testid={testid?.body}>
            {virtualPaddingTop > 0 && (
              <tr>
                <td style={{ height: `${virtualPaddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map((virtualRow, index) => {
              const row = dataList[virtualRow.index];
              return (
                <Rows
                  key={rowKey ? row[rowKey] : index}
                  rowKey={rowKey}
                  rowData={row}
                  data={data || []}
                  index={index}
                  columns={coloums}
                  checkedRows={checkedRows}
                  handleCheckRow={handleCheckRow}
                />
              );
            })}
            {virtualPaddingBottom > 0 && (
              <tr>
                <td style={{ height: `${virtualPaddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        noContent
      )}
    </>
  );
};

export { TableBody };
