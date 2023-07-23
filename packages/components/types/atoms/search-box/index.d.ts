import { FC } from "react";
export interface SearchBoxProps {
    searchHandler: (input: string) => void;
    searchTitle: string;
    className?: string;
    debounce?: boolean;
}
declare const SearchBox: FC<SearchBoxProps>;
export { SearchBox };
