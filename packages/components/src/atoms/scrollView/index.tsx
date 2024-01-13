import React from "react";
import { useStyles } from "./style";
import classnames from "classnames";

export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {}

const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, className, style, ...rest }, ref) => {
    const classes = useStyles();
    return (
      <div
        {...rest}
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
