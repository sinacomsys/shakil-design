export declare function useOnClickOutSide<T extends HTMLElement = HTMLElement>({ element, handler, extraElement, }: {
    element: T | null;
    handler: () => void;
    extraElement?: T | null;
}): void;
