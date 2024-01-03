import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Measure from "react-measure";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ScrollView, Spinner } from "../../atoms";
import { NoContent } from "../../molecules/noContent";
import { useTheme } from "../../theme";
import { ColumnType } from "./column";
import { Order, OrderBy, TableContext, TableContextProps } from "./context";
import { Header } from "./header";
import { SearchBar } from "./searchBar";
import { useStyles } from "./style";
import classNames from "classnames";
import { pxToVw, useWindowSize } from "@shakil-design/utils/src";
import { TableBody } from "./body";
import React from "react";

export const SEARCH_ICON = 32;
export const ROW_SELECTION = 62;
export const SCROLL_BAR = 8;
export const DEFAULT_ALIGN = "center";
const ROW_HEIGHT = 32;

export interface TableCommonType<T>
  extends Pick<TableContextProps<T>, "testid" | "onRow"> {
  data?: T[];
  rowKey?: keyof T;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  searchBarClassName?: string;
  searchBarStyle?: React.CSSProperties;
  searchBarToggle?: () => void;
  filterIcon?: React.ReactNode;
  clearFilterIcon?: React.ReactNode;
  isLoading?: boolean;
  height: number;
  coloums: ColumnType<T>[];
  noContent?: React.ReactNode;
  overScan?: number;
  onResetFilters?: () => void;
  onLoadNextPage?: () => void;
  isLoadingMore?: boolean;
}

export interface TablePropsWithMultipleSelectRows<T>
  extends TableCommonType<T> {
  selectedRows?: T[];
  onSelectRow?: (value: T[]) => void;
  mode?: "multiple";
}

export interface TablePropsWithSingleSelectRow<T> extends TableCommonType<T> {
  selectedRows?: T;
  onSelectRow?: (value: T) => void;
  mode?: "single";
}

type TableProps<T> =
  | TablePropsWithSingleSelectRow<T>
  | TablePropsWithMultipleSelectRows<T>;

function Table<T extends Record<string, any>>(
  props: TablePropsWithSingleSelectRow<T>,
): JSX.Element;
function Table<T extends Record<string, any>>(
  props: TablePropsWithMultipleSelectRows<T>,
): JSX.Element;
function Table<T extends Record<string, any>>(props: TableProps<T>) {
  const {
    data,
    rowKey,
    headerStyle,
    headerClassName,
    searchBarClassName,
    searchBarToggle,
    searchBarStyle,
    filterIcon,
    clearFilterIcon,
    isLoading,
    onSelectRow: onSelectRowProps,
    height,
    coloums,
    noContent,
    overScan,
    testid,
    onRow,
    mode,
    onResetFilters,
    onLoadNextPage,
    isLoadingMore,
    selectedRows: selectedRowsProps,
  } = props;

  const { table: { header } = {} } = useTheme();
  const classes = useStyles({ height });
  const [order, setOrder] = useState<Order>(undefined);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const [orderBy, setOrderBy] = useState<OrderBy>(undefined);
  const [selectedRow, setSelectedRow] = useState<T | undefined>(undefined);
  const [checkedRows, setCheckRows] = useState<T[]>([]);
  const [isAllRowsChecked, setAllRowsChecked] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [isOverFlowed, setIsOverflowed] = useState(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();

  const vw = windowWidth / 100;

  const rowSelectionWidth = pxToVw(ROW_SELECTION) * vw;
  const searchIconWidth = pxToVw(SEARCH_ICON) * vw;

  const _searchIconWidth =
    mode === "multiple" ? rowSelectionWidth : searchIconWidth;

  useEffect(() => {
    const isOver = bodyHeight > height;
    setIsOverflowed(isOver);
  }, [bodyHeight, height]);

  const list = useMemo(() => {
    let result = data || [];
    if (orderBy) {
      const sorter = coloums.find(({ dataIndex }) => {
        return dataIndex === orderBy;
      })?.sorter;
      result = [...(data || [])].sort(
        (a, b) =>
          (order === "ascending" ? sorter?.(a, b) : sorter?.(b, a)) || 0,
      );
    }
    return result;
  }, [orderBy, data, order, coloums]);

  const onToggleSearchBar = () => {
    setShowSearchBar((prev) => {
      return !prev;
    });
    searchBarToggle?.();
  };

  const calculateWidth = (totalWidth: number) => {
    let withOutDeclaredWidth = 0;
    const columnsWidth = coloums.reduce((prev, { width }) => {
      return prev + (width || 0);
    }, 0);

    const scrollBarWidth = isOverFlowed ? 0 : pxToVw(SCROLL_BAR) * vw;
    const _columnsWidth = pxToVw(columnsWidth) * vw;
    const searchIconWidth = _searchIconWidth;

    const remainWidth =
      totalWidth - (_columnsWidth + scrollBarWidth + searchIconWidth);

    coloums.forEach(({ width }) => {
      if (!width) {
        withOutDeclaredWidth += 1;
      }
    });
    if (withOutDeclaredWidth) {
      return remainWidth / withOutDeclaredWidth;
    }
  };

  const isSearchAvailable = coloums.find(({ renderFilter }) => renderFilter);

  const onOrderChange = ({ dataIndex }: { dataIndex: OrderBy }) => {
    setOrder(
      dataIndex === orderBy
        ? order === "ascending"
          ? "descending"
          : order === "descending"
          ? undefined
          : "ascending"
        : "ascending",
    );
    setOrderBy(
      dataIndex === orderBy && order === "descending" ? undefined : dataIndex,
    );
  };

  const handleCheckRow = ({ rowId }: { rowId: T[keyof T] }) => {
    const isCurrentRowAlreadySelected = checkedRows.find((item) => {
      return rowKey && item[rowKey] === rowId;
    });

    if (isCurrentRowAlreadySelected) {
      const filtered = checkedRows.filter((item) => {
        return rowKey && item[rowKey] !== rowId;
      });
      setCheckRows(filtered);
      return;
    }

    const selectedRow = (data || []).find((item) => {
      return rowKey && item[rowKey] === rowId;
    });

    if (selectedRow) {
      setCheckRows((prev) => {
        return [...prev, selectedRow];
      });
    }
  };

  const handleOnSelectRow = (value: T) => {
    if (mode === "single") {
      setSelectedRow(value);
      onSelectRowProps?.(value);
    }
  };

  const onCheckAllRows = () => {
    setAllRowsChecked((prev) => !prev);
    if (data && mode === "multiple") {
      setCheckRows(data);
      onSelectRowProps?.(data);
    }
    if (isAllRowsChecked && mode === "multiple") {
      setCheckRows([]);
      onSelectRowProps?.([]);
    }
  };

  useEffect(() => {
    if (checkedRows.length === 0) {
      setAllRowsChecked(false);
    } else if (checkedRows.length === data?.length) {
      setAllRowsChecked(true);
    }
  }, [data, checkedRows, mode]);

  useEffect(() => {
    if (mode === "single") {
      setSelectedRow(selectedRowsProps);
      setCheckRows([]);
    } else if (mode === "multiple") {
      setCheckRows(selectedRowsProps || []);
      setSelectedRow(undefined);
    }
  }, [selectedRowsProps, mode]);

  const estimateSize = useMemo(() => {
    return (ROW_HEIGHT / 10.8) * (windowHeight / 100);
  }, [windowHeight]);

  const rowVirtualizer = useVirtualizer({
    getScrollElement() {
      return tableContainerRef.current;
    },
    count: list.length,
    overscan: overScan || 20,
    estimateSize: () => estimateSize,
  });

  const { getVirtualItems, getTotalSize } = rowVirtualizer;

  const paddingTop =
    getVirtualItems().length > 0 ? getVirtualItems()?.[0]?.start || 0 : 0;
  const paddingBottom =
    getVirtualItems().length > 0
      ? getTotalSize() -
        (getVirtualItems()[getVirtualItems().length - 1]?.end || 0)
      : 0;

  const isIndeterminate =
    checkedRows.length > 0 && checkedRows.length !== (data || []).length;

  const _noContent = noContent ? noContent : <NoContent text="No Data!" />;

  const getBodyHeight = useCallback((body: HTMLDivElement) => {
    setBodyHeight(body?.clientHeight || 0);
  }, []);

  const onDeselectCheckedRows = (row: T) => {
    if (mode === "multiple") {
      setCheckRows([row]);
      onSelectRowProps?.([row]);
    }
  };

  return (
    <Measure bounds>
      {({ contentRect, measureRef }) => {
        const boundsWidth =
          (contentRect.bounds?.width || 0) - (isOverFlowed ? SCROLL_BAR : 0);

        const colWidth = calculateWidth(boundsWidth ?? 0);

        return (
          <div ref={measureRef} className={classNames(classes["container"])}>
            {isLoading && (
              <div className={`${classes["spinner"]}--overlay`}>
                <div className={classes["spinner"]}>
                  <Spinner size={"large"} />
                </div>
              </div>
            )}
            <TableContext.Provider
              value={{
                isAllRowsChecked,
                onCheckAllRows,
                onOrderChange,
                order,
                orderBy,
                selectedRow,
                onSelectRow: handleOnSelectRow,
                isOverflowed: isOverFlowed,
                testid,
                onRow,
                virtualizer: rowVirtualizer,
                handleCheckRow,
                checkedRows,
                rowKey,
                data: data || [],
                mode,
                onDeselectCheckedRows,
                onLoadNextPage,
              }}
            >
              <div className={classes["wrapper"]}>
                {boundsWidth > 0 ? (
                  <table className={classes["table"]} role={"table"}>
                    <colgroup>
                      <col
                        style={{
                          width: _searchIconWidth,
                        }}
                      />
                      {coloums.map(({ width, dataIndex }) => {
                        const _width = width && pxToVw(width) * vw;
                        return (
                          <col
                            key={dataIndex as string}
                            style={{ width: _width ? _width : colWidth }}
                          />
                        );
                      })}
                      {isOverFlowed ? (
                        <col style={{ width: pxToVw(SCROLL_BAR) * vw }} />
                      ) : null}
                    </colgroup>
                    <thead
                      className={headerClassName}
                      style={{
                        backgroundColor: header,
                        ...headerStyle,
                      }}
                    >
                      <Header
                        filterIcon={filterIcon}
                        isSearchVisible={isSearchVisible}
                        onToggleSearchBar={
                          isSearchAvailable && onToggleSearchBar
                        }
                        columns={coloums}
                        isIndeterminate={isIndeterminate}
                      />

                      {isSearchAvailable ? (
                        <SearchBar
                          isIndeterminate={isIndeterminate}
                          clearFilterIcon={clearFilterIcon}
                          searchBarStyle={searchBarStyle}
                          searchBarClassName={searchBarClassName}
                          columns={coloums}
                          data={data || []}
                          isSearchVisible={isSearchVisible}
                          onResetFilters={onResetFilters}
                        />
                      ) : null}
                    </thead>
                  </table>
                ) : null}

                <ScrollView
                  ref={tableContainerRef}
                  className={classes["table-body"]}
                >
                  {boundsWidth > 0 ? (
                    <TableBody
                      ref={getBodyHeight}
                      paddingTop={paddingTop}
                      paddingBottom={paddingBottom}
                      noContent={_noContent}
                      searchIconWidth={_searchIconWidth}
                      virtualRows={getVirtualItems()}
                      colWidth={colWidth}
                      coloums={coloums}
                      dataList={list}
                      width={boundsWidth || 0}
                      loadingMore={isLoadingMore || false}
                    />
                  ) : null}
                </ScrollView>
              </div>
            </TableContext.Provider>
          </div>
        );
      }}
    </Measure>
  );
}

export type { ColumnType };
export { Table };
