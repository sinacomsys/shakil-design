import { useContext } from "react";
import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@shakil-design/utils";
import { ColumnType } from "../column";
import { TableContext } from "../context";

interface SearchBarProps<T> {
  isSearchVisible: boolean;
  columns: ColumnType<T>[];
  data: T[];
  searchBarStyle?: React.CSSProperties;
  onResetFilters?: () => void;
  searchBarClassName?: string;
  clearFilterIcon?: React.ReactNode;
  isIndeterminate: boolean;
}

const SearchBar = <T extends Record<string, unknown>>({
  isSearchVisible,
  columns,
  data,
  searchBarStyle,
  onResetFilters,
  searchBarClassName,
  clearFilterIcon,
  isIndeterminate,
}: SearchBarProps<T>) => {
  const { table: { filtersTab, divider } = {} } = useTheme();
  const { onCheckAllRows, isAllRowsChecked, isOnCheckedRowsAvailable } =
    useContext(TableContext);
  return (
    <tr
      className={searchBarClassName}
      style={{
        display: isSearchVisible ? "table-row" : "none",
        height: `${pxToVh(45)}vh`,
        backgroundColor: filtersTab,
        ...searchBarStyle,
      }}
    >
      <th style={{ width: SEARCH_ICON }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isOnCheckedRowsAvailable ? (
            <div
              style={{
                borderRight: `1px solid ${divider}`,
                width: 31,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 24,
              }}
            >
              <CheckBox
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={isIndeterminate}
              />
            </div>
          ) : null}
          <div
            style={{
              height: 24,
              width: 31,
              borderRight: `1px solid ${divider}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {clearFilterIcon ? (
              clearFilterIcon
            ) : (
              <BaseIcon
                wrapperStyle={{ cursor: "pointer" }}
                onClick={onResetFilters}
                color={"white"}
                name="Table-_-Clear-Filters"
                size={{ width: 16, height: 16 }}
              />
            )}
          </div>
        </div>
      </th>
      {columns.map(({ renderFilter, align }, index) => {
        return (
          <th style={{ textAlign: align ? align : DEFAULT_ALIGN }} key={index}>
            {renderFilter ? renderFilter({ data }) : null}
          </th>
        );
      })}
      <th />
    </tr>
  );
};

export { SearchBar };
