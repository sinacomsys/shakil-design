import { VirtualItem } from "@tanstack/react-virtual";
import { useStyles } from "./style";
import { pxToVwString } from "@shakil-design/utils";
import { Rows } from "../rowContainer";
import { TableCommonType } from "..";
import { UnitContext } from "../../../theme/context";
import { ReactElement, Ref, useContext } from "react";
import { useMyTableContext } from "../context";
import React from "react";

interface TableBodyProps<T extends Record<string, any>>
  extends Pick<TableCommonType<T>, "coloums"> {
  virtualRows: VirtualItem[];
  noContent: React.ReactNode;
  searchIconWidth: number | string;
  dataList: T[];
  colWidth: number | string | undefined;
  paddingTop: number;
  paddingBottom: number;
  width: number;
}

const TableBody = <T extends Record<string, any>>(
  {
    virtualRows,
    noContent,
    searchIconWidth,
    dataList,
    coloums,
    colWidth,
    paddingBottom,
    paddingTop,
    width,
  }: TableBodyProps<T>,
  ref: Ref<HTMLDivElement>,
) => {
  const classes = useStyles();
  const { unit } = useContext(UnitContext);
  const { testid, virtualizer, rowKey } = useMyTableContext<T>();

  return (
    <>
      {virtualRows.length > 0 ? (
        <div ref={ref} style={{ height: `${virtualizer?.getTotalSize()}px` }}>
          <table
            style={{ width: width }}
            className={classes["wrapper"]}
            role={"table"}
          >
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
              {paddingTop > 0 && <tr style={{ height: `${paddingTop}px` }} />}
              {virtualRows.map((virtualRow, index) => {
                const row = dataList[virtualRow.index];
                return (
                  <Rows
                    key={rowKey ? row[rowKey] : index}
                    rowData={row}
                    index={index}
                    columns={coloums}
                    virtualItem={virtualRow}
                  />
                );
              })}
              {paddingBottom > 0 && (
                <tr style={{ height: `${paddingBottom}px` }}></tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        noContent
      )}
    </>
  );
};

const TableBodyWrapper = React.forwardRef(TableBody) as <
  T extends Record<string, any>,
>(
  p: TableBodyProps<T> & { ref?: Ref<HTMLDivElement> },
) => ReactElement;

export { TableBodyWrapper as TableBody };
