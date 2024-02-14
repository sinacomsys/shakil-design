import { VirtualItem } from "@tanstack/react-virtual";
import { useStyles } from "./style";
import { pxToVwString } from "@shakil-design/utils/src";
import { RowContainer } from "../rowContainer";
import { TableCommonType } from "..";
import { UnitContext } from "../../../theme/context";
import {
  ReactElement,
  Ref,
  useCallback,
  useContext,
  useRef,
  ElementRef,
} from "react";
import { useMyTableContext } from "../context";
import React from "react";
import { Text } from "../../../atoms";

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
  loadingMore: boolean;
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
    loadingMore,
  }: TableBodyProps<T>,
  ref: Ref<ElementRef<"table">>,
) => {
  const classes = useStyles();
  const observer = useRef<any>(null);
  const { unit } = useContext(UnitContext);
  const { testid, virtualizer, rowKey, onLoadNextPage } =
    useMyTableContext<T>();

  const lastItemRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onLoadNextPage?.();
        }
      });
      if (node) observer.current.observe(node);
    },
    [onLoadNextPage],
  );

  return (
    <>
      {virtualRows.length > 0 ? (
        <div style={{ height: `${virtualizer?.getTotalSize()}px` }}>
          <table ref={ref} className={classes["wrapper"]} role={"table"}>
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
                if (virtualRows.length === index + 1) {
                  return (
                    <RowContainer
                      lastItem={lastItemRef}
                      key={rowKey ? row[rowKey] : index}
                      rowData={row}
                      index={index}
                      columns={coloums}
                      virtualItem={virtualRow}
                    />
                  );
                }
                return (
                  <RowContainer
                    key={rowKey ? row[rowKey] : index}
                    rowData={row}
                    index={index}
                    columns={coloums}
                    virtualItem={virtualRow}
                  />
                );
              })}
              {loadingMore ? (
                <tr>
                  <td colSpan={6}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Text size={20}>loading...</Text>
                    </div>
                  </td>
                </tr>
              ) : null}

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
