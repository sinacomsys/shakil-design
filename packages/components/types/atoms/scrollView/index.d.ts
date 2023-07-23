import React from "react";
export interface ScrollViewProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
declare const ScrollView: React.ForwardRefExoticComponent<ScrollViewProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollView };
