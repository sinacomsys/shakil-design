import React from "react";
export interface LoadingProps {
    children?: React.ReactNode;
    isLoading?: boolean;
    spinnerColor?: string;
    size?: "small" | "medium" | "large";
    style?: React.CSSProperties;
}
declare const Loading: ({ children, isLoading, spinnerColor, size, style, }: LoadingProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Loading };
