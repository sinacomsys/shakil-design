import { useEffect, useMemo, useRef, useState } from "react";
import Measure from "react-measure";
import { useVirtual } from "react-virtual";
import { ScrollView, Spinner } from "../../atoms";
import { NoContent } from "../../molecules/noContent";
import { useTheme } from "../../theme";
import { ColumnType } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { Header } from "./header";
import { Rows } from "./rowContainer";
import { SearchBar } from "./searchBar";
import { useStyles } from "./style";
import classNames from "classnames";
import { Unit } from "../../types";
import { pxToVw, pxToVwString } from "@shakil-design/utils";

export const SEARCH_ICON = 32;
export const ROW_SELECTION = 62;
export const SCROLL_BAR = 8;
export const DEFAULT_ALIGN = "center";

export interface TableProps<T> {
  data?: T[];
  rowKey?: keyof T;
  onCheckedRows?: (value: T[]) => void;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  searchBarClassName?: string;
  searchBarStyle?: React.CSSProperties;
  searchBarToggle?: () => void;
  filterIcon?: React.ReactNode;
  clearFilterIcon?: React.ReactNode;
  isLoading?: boolean;
  onSelectRow?: (value: T) => void;
  height: number;
  coloums: ColumnType<T>[];
  noContent?: React.ReactNode;
  overScan?: number;
  unit?: Unit;
}

const Table = <T extends Record<string, any>>({
  data,
  onCheckedRows,
  rowKey,
  headerStyle,
  headerClassName,
  searchBarClassName,
  searchBarToggle,
  searchBarStyle,
  filterIcon,
  clearFilterIcon,
  isLoading,
  onSelectRow,
  height,
  coloums,
  noContent,
  overScan,
  unit = "viewport",
}: TableProps<T>) => {
  const { table: { header } = {} } = useTheme();
  const classes = useStyles();
  const [order, setOrder] = useState<Order>(undefined);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const [orderBy, setOrderBy] = useState<OrderBy>(undefined);
  const [selectedRow, setSelectedRow] = useState<T | undefined>(undefined);
  const [checkedRows, setCheckRows] = useState<T[]>([]);

  const [isAllRowsChecked, setAllRowsChecked] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  const isViewPortUnit = unit === "viewport";

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
  useEffect(() => {
    const element = tableContainerRef.current;
    if (element) {
      const isElementOverflowed = element.scrollWidth > element.clientWidth;
      setIsOverflowed(isElementOverflowed);
    }
  }, [data]);

  const calculateWidth = (totalWidth: number) => {
    let withOutWidthNum = 0;
    const columnsWidth = coloums.reduce((prev, { width }) => {
      return prev + (width || 0);
    }, 0);

    const scrollBarWidth = isOverflowed
      ? 0
      : isViewPortUnit
      ? pxToVw(SCROLL_BAR)
      : SCROLL_BAR;
    const _columnsWidth = isViewPortUnit ? pxToVw(columnsWidth) : columnsWidth;

    const searchIconWidth = isViewPortUnit ? pxToVw(SEARCH_ICON) : SEARCH_ICON;
    const _totalWidth = isViewPortUnit ? pxToVw(totalWidth) : totalWidth;

    const remainWidth =
      _totalWidth - (_columnsWidth + scrollBarWidth + searchIconWidth);

    coloums.forEach(({ width }) => {
      if (!width) {
        withOutWidthNum += 1;
      }
    });
    if (withOutWidthNum && unit === "pixel") {
      return remainWidth / withOutWidthNum;
    } else if (withOutWidthNum && isViewPortUnit) {
      return `${remainWidth / withOutWidthNum}vw`;
    }
  };

  const rowSelectionWidth = isViewPortUnit
    ? pxToVwString(ROW_SELECTION)
    : ROW_SELECTION;

  const searchIconWidth = isViewPortUnit
    ? pxToVwString(SEARCH_ICON)
    : SEARCH_ICON;

  const _searchIconWidth = onCheckedRows ? rowSelectionWidth : searchIconWidth;

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
    const currentRow = checkedRows.find((item) => {
      return rowKey && item[rowKey] === rowId;
    });

    if (currentRow) {
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

  const handleOnSelectRow = (value: unknown) => {
    setSelectedRow(value as T);
    onSelectRow?.(value as T);
  };

  const onCheckAllRows = () => {
    if (!rowKey) return;
    setAllRowsChecked((prev) => !prev);
    if (data) {
      setCheckRows(data);
    }
    if (isAllRowsChecked) {
      setCheckRows([]);
    }
  };

  useEffect(() => {
    onCheckedRows?.(checkedRows);
    if (checkedRows.length === 0) {
      setAllRowsChecked(false);
      return;
    }
    if (checkedRows.length === data?.length) {
      setAllRowsChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, checkedRows]);

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: list.length,
    overscan: overScan || 20,
  });

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  const isIndeterminate =
    checkedRows.length > 0 && checkedRows.length !== (data || []).length;

  const _noContent = noContent ? noContent : <NoContent text="No Data!" />;

  return (
    <Measure bounds>
      {({ contentRect, measureRef }) => {
        const boundsWidth = contentRect.bounds?.width;
        const colWidth = calculateWidth(boundsWidth ?? 0);
        return (
          <div
            ref={measureRef}
            style={{
              height,
            }}
            className={classNames(
              isLoading && classes["backDrop"],
              classes["container"],
            )}
          >
            {isLoading && (
              <div className={classes["spinner"]}>
                <Spinner size={"large"} />
              </div>
            )}
            <TableContext.Provider
              value={{
                isAllRowsChecked,
                onCheckAllRows,
                onOrderChange,
                order,
                orderBy,
                selectedRow: selectedRow,
                onSelectRow: handleOnSelectRow,
                isOnCheckedRowsAvailable: Boolean(onCheckedRows),
                isSelectSingleRowAvailable: Boolean(onSelectRow),
                isOverflowed,
              }}
            >
              {boundsWidth ? (
                <div className={classes["wrapper"]}>
                  <table className={classes["table"]} role={"table"}>
                    <colgroup>
                      <col
                        style={{
                          width: _searchIconWidth,
                        }}
                      />
                      {coloums.map(({ width, dataIndex }) => {
                        const _width =
                          isViewPortUnit && width ? pxToVwString(width) : width;
                        return (
                          <col
                            key={dataIndex as string}
                            style={{ width: _width ? _width : colWidth }}
                          />
                        );
                      })}
                      {isOverflowed ? (
                        <col style={{ width: SCROLL_BAR }} />
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
                        />
                      ) : null}
                    </thead>
                  </table>
                  <ScrollView
                    ref={tableContainerRef}
                    style={{ flex: 1, overflowY: "auto" }}
                  >
                    {virtualRows.length > 0 ? (
                      <table className={classes["table"]} role={"table"}>
                        <colgroup>
                          <col style={{ width: _searchIconWidth }} />
                          {coloums.map(({ width, dataIndex }) => {
                            const _width =
                              isViewPortUnit && width
                                ? pxToVwString(width)
                                : width;
                            return (
                              <col
                                key={dataIndex as string}
                                style={{ width: _width ? _width : colWidth }}
                              />
                            );
                          })}
                        </colgroup>

                        <tbody>
                          {paddingTop > 0 && (
                            <tr>
                              <td style={{ height: `${paddingTop}px` }} />
                            </tr>
                          )}
                          {virtualRows.map((virtualRow, index) => {
                            const row = list[virtualRow.index];
                            return (
                              <Rows
                                key={index}
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
                          {paddingBottom > 0 && (
                            <tr>
                              <td style={{ height: `${paddingBottom}px` }} />
                            </tr>
                          )}
                        </tbody>
                      </table>
                    ) : (
                      _noContent
                    )}
                  </ScrollView>
                </div>
              ) : null}
            </TableContext.Provider>
          </div>
        );
      }}
    </Measure>
  );
};

export type { ColumnType };
export { Table };
