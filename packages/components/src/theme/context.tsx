import { pxToVhString, pxToVwString } from "@shakil-design/utils";
import React from "react";
import { JssProvider, createTheming, jss } from "react-jss";
import { Unit } from "../types";

const xAxis = ["inline", "width", "left", "right"];
const yAxis = ["block", "height", "top", "bottm"];
const bothAxis = ["margin", "padding", "border"];

const isInclude = (a?: string, b?: string) => {
  return a?.toLowerCase().includes((b || "")?.toLowerCase() || "");
};

const findAxis = (value: string) => {
  const isXAxis = xAxis.find((item) => {
    return isInclude(value, item);
  });
  const isYAxis = yAxis.find((item) => {
    return isInclude(value, item);
  });
  const both = bothAxis.find((item) => {
    return isInclude(value, item);
  });
  if (isXAxis) return "x";
  else if (isYAxis) return "y";
  else if (both) return "both";
};

const convertXaxis = (value: string) => {
  if (isInclude(value, "important")) {
    return value;
  } else if (isInclude(value, "calc")) {
    return value;
  }

  return value
    .split(" ")
    .map((i) => {
      if (isInclude(i, "px")) {
        return ` ${pxToVwString(parseInt(i, 10))}`;
      }
      return i;
    })
    .join(" ");
};
const convertYaxis = (value: string) => {
  if (isInclude(value, "important")) {
    return value;
  } else if (isInclude(value, "calc")) {
    return value;
  }

  return value
    .split(" ")
    .map((i) => {
      if (isInclude(i, "px")) {
        return `${parseInt(i, 10) / 10.8}vh`;
      }
      return i;
    })
    .join(" ");
};

const convertBothAxis = (value: string) => {
  const splited = value.split(" ");
  const lenght = splited.length;

  if (lenght === 1 && isInclude(value, "px")) {
    return `${pxToVhString(parseInt(value))}`;
  } else if (lenght === 2) {
    const first = isInclude(splited[0], "px")
      ? `${pxToVhString(parseInt(splited[0]))}`
      : splited[0];

    const second = isInclude(splited[1], "px")
      ? `${pxToVwString(parseInt(splited[1]))}`
      : splited[1];

    return `${first} ${second}`;
  } else if (lenght === 3) {
    const first = isInclude(splited[0], "px")
      ? `${pxToVhString(parseInt(splited[0]))}`
      : splited[0];

    const second = isInclude(splited[1], "px")
      ? `${pxToVwString(parseInt(splited[1]))}`
      : splited[1];
    const third = isInclude(splited[2], "px")
      ? `${pxToVhString(parseInt(splited[2]))}`
      : splited[2];

    return `${first} ${second} ${third}`;
  } else if (lenght === 4) {
    const first = isInclude(splited[0], "px")
      ? `${pxToVhString(parseInt(splited[0]))}`
      : splited[0];

    const second = isInclude(splited[1], "px")
      ? `${pxToVwString(parseInt(splited[1]))}`
      : splited[1];
    const third = isInclude(splited[2], "px")
      ? `${pxToVhString(parseInt(splited[2]))}`
      : splited[2];
    const forth = isInclude(splited[3], "px")
      ? `${pxToVhString(parseInt(splited[3]))}`
      : splited[3];

    return `${first} ${second} ${third} ${forth}`;
  }
};

const convertPxToVp = (style: any): any => {
  if (Array.isArray(style)) {
    return style.map((i) => convertPxToVp(i));
  }
  for (const property in style) {
    const axis = findAxis(property);
    const propertyValue = style[property];
    if (!isInclude(propertyValue, "px")) {
      continue;
    } else if (axis === "x") {
      style[property] = convertXaxis(propertyValue);
    } else if (axis === "y") {
      style[property] = convertYaxis(propertyValue);
    } else if (axis === "both") {
      style[property] = convertBothAxis(propertyValue);
    } else if (property === "font-size") {
      const isInPxUnit = isInclude(propertyValue, "px");
      style[property] = isInPxUnit
        ? `${pxToVhString(parseInt(propertyValue))}`
        : propertyValue;
    }
  }

  return style;
};

export const Colors: ColorsType = {
  primary: "#374775",
  checkbox: {
    borderSelected: "#374775",
    squareSelected: "#58cc87",
    unselectedBorder: "#8e8e8e",
    unselectedSquare: "#e9e9e9",
    deactive: "#b4b4b4",
  },
  radio: {
    enableInnerCircleSelected: "#58cc87",
    enableInnerCircleUnselected: "#E9E9E9",
    enableStroke: "#374775",
    disableInnerCircleSelected: "#b4b4b4",
    disableInnerCricleUnselected: "#e9e9e9",
    disableStroke: "#8e8e8e",
  },
  textInput: {
    fieldColor: "#ebedf2",
  },
  button: {
    main: "#324775",
    danger: "#c65161",
    success: "#58cc87",
  },
  tab: {
    selectedTab: "#FFFFFF",
    textColor: "#6C7797",
    unSelectedTab: "#E3E6F1",
  },
  fileInput: "red",
  table: {
    header: "#374775",
    divider: "#c2c9db",
    filterIcon: "#48e580",
    filtersTab: "#6c7797",
    rowHover: "#ebedf2",
    selectedRow: "#e3f6eb",
    selectedRowBookmark: "#58cc87",
    sortArrow: "#48e580",
    clearFilterIcon: "#ffffff",
    rowBorder: "#eeeeee",
  },
  select: {
    hover: "#ebedf2",
    backgroundColor: "#ebedf2",
    selected: "#959db8",
    clearIcon: "#575757",
    fleshIcon: "#575757",
  },
  disableField: "#eeeeee",
  disableText: "#d1d1d1",
  tree: {
    dotLine: "#6c7797",
    activeItem: "#374775",
  },
  collapse: {
    panel: "red",
    openPanel: "blue",
    closePanel: "purple",
  },
  switch: {
    checked: "#58cc87",
    unchecked: "#ff8946",
  },
  noContent: "red",
};

type ColorsType = {
  primary: string;
  checkbox?: {
    borderSelected: string;
    squareSelected: string;
    unselectedBorder: string;
    unselectedSquare: string;
    deactive: string;
  };
  radio?: {
    enableStroke: string;
    enableInnerCircleUnselected: string;
    enableInnerCircleSelected: string;
    disableStroke: string;
    disableInnerCricleUnselected: string;
    disableInnerCircleSelected: string;
  };
  textInput?: {
    fieldColor: string;
  };
  button?: {
    main: string;
    danger: string;
    success: string;
  };
  tab?: {
    selectedTab: string;
    unSelectedTab: string;
    textColor: string;
  };
  fileInput?: string;
  table?: {
    header: string;
    divider: string;
    filterIcon: string;
    sortArrow: string;
    filtersTab: string;
    rowHover: string;
    selectedRow: string;
    selectedRowBookmark: string;
    clearFilterIcon: string;
    rowBorder: string;
  };
  select?: {
    hover: string;
    backgroundColor: string;
    selected: string;
    clearIcon: string;
    fleshIcon: string;
  };
  disableText: string;
  disableField: string;
  tree?: {
    dotLine: string;
    activeItem: string;
  };
  collapse?: {
    panel: string;
    openPanel: string;
    closePanel: string;
  };
  switch?: {
    checked: string;
    unchecked: string;
  };
  noContent?: string;
};

const ThemeContext = React.createContext<ColorsType>(Colors);
export const UnitContext = React.createContext<{ unit?: Unit }>({});
// Creating a namespaced theming object.
const theming = createTheming(ThemeContext);
const { ThemeProvider, ...rest } = theming;

const ShakilDesignThemeProvider = ({
  children,
  colors,
  unit = "viewport",
}: {
  children: React.ReactNode;
  colors: ColorsType;
  unit?: Unit;
}) => {
  if (unit === "viewport") {
    jss.use({
      onProcessStyle: convertPxToVp,
    });
  }

  return (
    <JssProvider
      generateId={(rule, sheet) =>
        `shakil-${sheet?.options?.classNamePrefix}${rule.key}`
      }
    >
      <UnitContext.Provider value={{ unit }}>
        <ThemeProvider theme={colors}>{children}</ThemeProvider>
      </UnitContext.Provider>
    </JssProvider>
  );
};

export type { ColorsType };
export { ShakilDesignThemeProvider, rest, ThemeProvider, theming };
