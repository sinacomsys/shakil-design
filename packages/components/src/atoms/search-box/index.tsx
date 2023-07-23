import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
// import styles from './search-box.module.scss';
import { useStyles } from "./style";

export interface SearchBoxProps {
  searchHandler: (input: string) => void;
  searchTitle: string;
  className?: string;
  debounce?: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({
  searchHandler,
  searchTitle,
  className = "",
  debounce = false,
}) => {
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!debounce) {
      return searchHandler(search);
    }
    const timeout = setTimeout(() => searchHandler(search), 500);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <input
      value={search}
      onChange={changeInputHandler}
      className={classNames(classes["searchBox"], className)}
      placeholder={`Search ${searchTitle} ${String.fromCodePoint(
        0xfe0e,
        0x1f50e,
      )}`}
    />
  );
};

export { SearchBox };
