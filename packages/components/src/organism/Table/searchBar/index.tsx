import { useContext } from "react";
import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@sina-base/utils";
import { ColumnType } from "../column";
import { TableContext } from "../context";

interface SearchBarProps<T> {
  isSearchVisible: boolean;
  columns: ColumnType<T>[];
  data: T[];
  searchBarStyle?: React.CSSProperties;
  isOnCheckedRowsAvailable: boolean;
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
  isOnCheckedRowsAvailable,
  onResetFilters,
  searchBarClassName,
  clearFilterIcon,
  isIndeterminate,
}: SearchBarProps<T>) => {
  const { color_primary_2, color_primary_5 } = useTheme();
  const { onCheckAllRows, isAllRowsChecked } = useContext(TableContext);
  return (
    <tr
      className={searchBarClassName}
      style={{
        display: isSearchVisible ? "table-row" : "none",
        height: `${pxToVh(45)}vh`,
        backgroundColor: color_primary_2,
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
                borderRight: `1px solid ${color_primary_5}`,
                width: 31,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 24,
              }}
            >
              <CheckBox
                mode="light"
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
              borderRight: `1px solid ${color_primary_5}`,
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
                color={color_primary_5}
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
