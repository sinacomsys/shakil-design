import { useContext } from "react";
import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules";
import { useTheme } from "../../../theme";
import { ColumnType } from "../column";
import { TableContext } from "../context";
import { useStyles } from "./style";
import classNames from "classnames";

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
  const { table: { clearFilterIcon: clearFilterIconColor } = {} } = useTheme();
  const {
    onCheckAllRows,
    isAllRowsChecked,
    isOnCheckedRowsAvailable,
    isOverflowed,
  } = useContext(TableContext);
  const classes = useStyles({ isSearchVisible });

  return (
    <tr
      className={classNames(
        classes["wrapper"],
        searchBarClassName && searchBarClassName,
      )}
      style={{
        ...searchBarStyle,
      }}
    >
      <th style={{ width: SEARCH_ICON }}>
        <div className={`${classes["clear-filter"]}--wrapper`}>
          {isOnCheckedRowsAvailable ? (
            <div className={classes["checkbox"]}>
              <CheckBox
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={isIndeterminate}
              />
            </div>
          ) : null}
          <div className={classes["clear-filter"]}>
            {clearFilterIcon ? (
              clearFilterIcon
            ) : (
              <BaseIcon
                wrapperStyle={{ cursor: "pointer" }}
                onClick={onResetFilters}
                color={clearFilterIconColor}
                name="Table-_-Clear-Filters"
                size={{ width: 14, height: 14 }}
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
      {isOverflowed ? <th /> : null}
    </tr>
  );
};

export { SearchBar };
