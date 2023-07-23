import classNames from "classnames";
import { forwardRef, memo, ReactNode } from "react";
import { createUseStyles } from "react-jss";

export type Variant =
  | "div"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "article"
  | "p"
  | "main"
  | "section";

export interface BaseTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className"> {
  testID?: string;
  href?: string;
  variant?: Variant;
  children?: ReactNode | ReactNode[] | null;
  onPress?: (e: unknown) => void;
  dir?: "auto" | "ltr" | "rtl";
  numberOfLines?: number;
  selectable?: boolean;
  className?: Parameters<typeof classNames>[0];
  ellipsis?: boolean;
}

/** Inspired of React-native Text */
const BaseText = memo(
  forwardRef<HTMLDivElement, BaseTextProps>(
    (
      { dir, numberOfLines, selectable, className, style, ellipsis, ...rest },
      forwardedRef,
    ) => {
      const classes = useStyles();
      return (
        <div
          ref={forwardedRef}
          dir={dir != null ? dir : "auto"}
          className={classNames(
            classes.text,
            selectable === true && classes.selectable,
            selectable === false && classes.notSelectable,
            numberOfLines != null && classes.textMultiLine,
            ellipsis === true && classes.ellipsis,
            className,
          )}
          style={{
            ...style,
            ...(numberOfLines && { WebkitLineClamp: numberOfLines }),
          }}
          {...rest}
        />
      );
    },
  ),
);

const useStyles = createUseStyles({
  text: {
    border: "0 solid black",
    boxSizing: "border-box",
    color: "black",
    display: "inline",
    fontSize: 14,
    margin: 0,
    padding: 0,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    // maxWidth: '100%',
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: 'nowrap',
    // whiteSpace: "pre",
    WebkitBoxOrient: "vertical",
  },
  ellipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  notSelectable: {
    userSelect: "none",
  },
  selectable: {
    userSelect: "text",
  },
});

BaseText.displayName = "BaseText";

export { BaseText };
