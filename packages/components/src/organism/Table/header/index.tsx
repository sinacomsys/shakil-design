import React from "react";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme";
import { Column, ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { useStyles } from "./style";
import classNames from "classnames";
interface HeaderProps<T extends object> {
  onToggleSearchBar?: () => void;
  isSearchVisible: boolean;
  filterIcon?: React.ReactNode;
  columns: ColumnType<T>[];
  isIndeterminate: boolean;
  isSearchAvailable: boolean;
}

const Header = <T extends object>({
  onToggleSearchBar,
  filterIcon,
  columns,
  isIndeterminate,
  isSearchAvailable,
}: HeaderProps<T>) => {
  const { table: { filterIcon: filterIconColor } = {} } = useTheme();
  const classes = useStyles();
  const { onCheckAllRows, isAllRowsChecked, mode, isOverflowed, testid } =
    useMyTableContext();
  return (
    <tr data-testid={testid?.header}>
      <th>
        <div className={classes["filter-icon-wrapper"]}>
          {mode === "multiple" ? (
            <div className={classes["selectAll"]}>
              <CheckBox
                data-testid={testid?.selectAll}
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={isIndeterminate}
              />
            </div>
          ) : null}

          <div
            onClick={onToggleSearchBar}
            className={classNames(
              mode === "single" && `${classes["search"]}--full-width`,
              classes["search"],
            )}
          >
            {filterIcon ? (
              filterIcon
            ) : (
              <BaseIcon
                data-testid={testid?.filterBarIcon}
                color={isSearchAvailable ? filterIconColor : "gray"}
                name="Table-_-Filter"
                size={{ width: 16, height: 16 }}
              />
            )}
          </div>
        </div>
      </th>
      {columns.map(({ dataIndex, title, sorter, style }) => {
        return (
          <Column
            key={dataIndex as string}
            dataIndex={dataIndex}
            title={title}
            sorter={sorter}
            style={style}
          />
        );
      })}
      {isOverflowed ? <th /> : null}
    </tr>
  );
};

export { Header };
