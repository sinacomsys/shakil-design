import React from "react";
interface ItemProps {
    title?: string;
    arrowDirection?: "up" | "down";
    level: number;
    backgroundColor: string;
    isActive?: boolean;
    textColor: string;
    fontSize?: number;
    isLoading: boolean;
    onClick?: () => void;
}
declare const Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLDivElement>>;
export { Item };
