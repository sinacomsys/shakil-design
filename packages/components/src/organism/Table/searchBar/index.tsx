import { DEFAULT_ALIGN } from "..";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules";
import { useTheme } from "../../../theme";
import { ColumnType } from "../column";
import { useMyTableContext } from "../context";
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
  const { onCheckAllRows, isAllRowsChecked, isOverflowed, testid, mode } =
    useMyTableContext();
  const classes = useStyles({ isSearchVisible });

  return (
    <tr
      data-testid={testid?.filterBar}
      className={classNames(
        classes["wrapper"],
        searchBarClassName && searchBarClassName,
      )}
      style={{
        ...searchBarStyle,
      }}
    >
      <th>
        <div className={`${classes["clear-filter"]}--wrapper`}>
          {mode === "multiple" ? (
            <div className={classes["checkbox"]}>
              <CheckBox
                data-testid={testid?.selectAll}
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
                data-testid={testid?.clearFiltersIcon}
                wrapperStyle={{ cursor: "pointer" }}
                onClick={onResetFilters}
                color={clearFilterIconColor}
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
      {isOverflowed ? <th /> : null}
    </tr>
  );
};

export { SearchBar };
