import React from "react";
import { useStyles } from "./style";
import classnames from "classnames";

export interface ScrollViewProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, className, style }, ref) => {
    const classes = useStyles();
    return (
      <div
        ref={ref}
        style={{ ...style }}
        className={classnames(className, classes.container)}
      >
        {children}
      </div>
    );
  },
);

ScrollView.displayName = "ScrollView";
export { ScrollView };
