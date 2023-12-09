import React from "react";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme";
import { Column, ColumnType } from "../column";
import { useMyTableContext } from "../context";
import { useStyles } from "./style";
interface HeaderProps<T extends object> {
  onToggleSearchBar?: () => void;
  isSearchVisible: boolean;
  filterIcon?: React.ReactNode;
  columns: ColumnType<T>[];
  isIndeterminate: boolean;
}

const Header = <T extends object>({
  onToggleSearchBar,
  filterIcon,
  columns,
  isIndeterminate,
}: HeaderProps<T>) => {
  const { table: { filterIcon: filterIconColor } = {} } = useTheme();
  const classes = useStyles();
  const {
    onCheckAllRows,
    isAllRowsChecked,
    isOnCheckedRowsAvailable,
    isOverflowed,
    testid,
  } = useMyTableContext();
  return (
    <tr data-testid={testid?.header}>
      <th>
        <div className={classes["filter-icon-wrapper"]}>
          {isOnCheckedRowsAvailable ? (
            <div className={classes["selectAll"]}>
              <CheckBox
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={isIndeterminate}
              />
            </div>
          ) : null}

          <div onClick={onToggleSearchBar} className={classes["search"]}>
            {filterIcon ? (
              filterIcon
            ) : (
              <BaseIcon
                data-testid={testid?.filterBarIcon}
                color={filterIconColor}
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
