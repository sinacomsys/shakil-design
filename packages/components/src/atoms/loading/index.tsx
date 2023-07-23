import classNames from "classnames";
import React from "react";
import { Spinner } from "./spinner";
import { useStyle } from "./style";

export interface LoadingProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  spinnerColor?: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
}

const Loading = ({
  children,
  isLoading,
  spinnerColor,
  size,
  style,
}: LoadingProps) => {
  const classes = useStyle();
  if (children === undefined) {
    return <Spinner spinerColor={spinnerColor} size={size} />;
  } else {
    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          ...style,
        }}
      >
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 2,
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Spinner spinerColor={spinnerColor} size={size} />
            </div>
          </div>
        ) : null}

        <div
          className={classNames(
            classes.spinContainer,
            isLoading && classes.loading,
          )}
        >
          {children}
        </div>
      </div>
    );
  }
};

export { Loading };
