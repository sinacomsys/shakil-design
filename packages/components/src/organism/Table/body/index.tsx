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
import { EndOfList } from "./endOfList";

interface TableBodyProps<T extends Record<string, any>>
  extends Pick<TableCommonType<T>, "coloums" | "endOfList" | "isLoadingMore"> {
  noContent: React.ReactNode;
  searchIconWidth: number | string;
  dataList: (T | "endOfList")[];
  colWidth: number | string | undefined;
  width: number;
}

const TableBody = <T extends Record<string, any>>(
  {
    noContent,
    searchIconWidth,
    dataList,
    coloums,
    colWidth,
    // isLoadingMore,
    endOfList,
  }: TableBodyProps<T>,
  ref: Ref<ElementRef<"table">>,
) => {
  const classes = useStyles();
  const observer = useRef<any>(null);
  const { unit } = useContext(UnitContext);
  const { testid, virtualizer, rowKey, onLoadNextPage } =
    useMyTableContext<T>();

  const virtualRows = virtualizer?.getVirtualItems() || [];

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
  const numberOfColumns = coloums.length;

  return (
    <>
      {virtualRows.length > 0 ? (
        <div style={{ height: `${virtualizer?.getTotalSize() ?? 0}px` }}>
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
              {virtualRows.map((virtualRow, index) => {
                const row = dataList[virtualRow.index];
                if (row === "endOfList") {
                  const transformY = virtualRow.start - index * virtualRow.size;
                  return (
                    <EndOfList
                      transformY={transformY}
                      key={row}
                      numberOfColumns={numberOfColumns}
                    >
                      {typeof endOfList === "string" ? (
                        <Text size={20}>{endOfList}</Text>
                      ) : (
                        endOfList
                      )}
                    </EndOfList>
                  );
                } else if (virtualRows.length === index + 1) {
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
              {/* {isLoadingMore ? (
                <EndOfList numberOfColumns={numberOfColumns}>
                  {typeof isLoadingMore === "boolean" ? (
                    <Text size={18}>Loading...</Text>
                  ) : (
                    isLoadingMore
                  )}
                </EndOfList>
              ) : null} */}
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
