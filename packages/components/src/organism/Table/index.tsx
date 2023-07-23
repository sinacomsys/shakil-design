import { useEffect, useMemo, useRef, useState } from "react";
import Measure from "react-measure";
import { useVirtual } from "react-virtual";
import { Loading, ScrollView } from "../../atoms";
import { NoContent } from "../../molecules/noContent";
import { useTheme } from "../../theme/context";
import { ColumnType } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { Header } from "./header";
import { RowContainer } from "./rowContainer";
import { SearchBar } from "./searchBar";
import { useStyles } from "./style";

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
}: TableProps<T>) => {
  const { color_primary_1 } = useTheme();
  const classes = useStyles();
  const [order, setOrder] = useState<Order>(undefined);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const [orderBy, setOrderBy] = useState<OrderBy>(undefined);
  const [selectedRow, setSelectedRow] = useState<T | undefined>(undefined);
  const [checkedRows, setCheckRows] = useState<T[]>([]);

  const [isAllRowsChecked, setAllRowsChecked] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

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
    let withOutWidthNum = 0;
    const columnsWidth = coloums.reduce((prev, { width }) => {
      return prev + (width || 0);
    }, 0);

    const remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);

    coloums.forEach(({ width }) => {
      if (!width) {
        withOutWidthNum += 1;
      }
    });
    if (withOutWidthNum) {
      return remainWidth / withOutWidthNum;
    }
  };

  const searchIconWidth = onCheckedRows ? ROW_SELECTION : SEARCH_ICON;

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
    overscan: 20,
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
        const colWidth = calculateWidth(contentRect.bounds?.width ?? 0);
        return (
          <ScrollView
            ref={measureRef}
            style={{
              width: "100%",
              height: height,
              overflowY: "auto",
            }}
          >
            <Loading size="large" isLoading={isLoading}>
              <TableContext.Provider
                value={{
                  isAllRowsChecked,
                  onCheckAllRows,
                  onOrderChange,
                  order,
                  orderBy,
                  selectedRow: selectedRow,
                  onSelectRow: handleOnSelectRow,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <table className={classes["table"]} role={"table"}>
                    <colgroup>
                      <col
                        style={{
                          width: searchIconWidth,
                        }}
                      />
                      {coloums.map(({ width, dataIndex }) => {
                        return (
                          <col
                            key={dataIndex as string}
                            style={{ width: width ? width : colWidth }}
                          />
                        );
                      })}
                      <col style={{ width: SCROLL_BAR }} />
                    </colgroup>
                    <thead
                      className={headerClassName}
                      style={{
                        backgroundColor: color_primary_1,
                        ...headerStyle,
                      }}
                    >
                      <Header
                        filterIcon={filterIcon}
                        isSearchVisible={isSearchVisible}
                        isOnCheckedRowsAvailable={Boolean(onCheckedRows)}
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
                          isOnCheckedRowsAvailable={Boolean(onCheckedRows)}
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
                          <col style={{ width: searchIconWidth }} />
                          {coloums.map(({ width, dataIndex }) => {
                            return (
                              <col
                                key={dataIndex as string}
                                style={{ width: width ? width : colWidth }}
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
                              <RowContainer
                                // onSelectRow={handleOnSelectRow}
                                key={index}
                                isOnCheckedRowsAvailable={Boolean(
                                  onCheckedRows,
                                )}
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
              </TableContext.Provider>
            </Loading>
          </ScrollView>
        );
      }}
    </Measure>
  );
};

export type { ColumnType };
export { Table };
