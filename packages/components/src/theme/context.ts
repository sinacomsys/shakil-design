import React from "react";
import { createTheming } from "react-jss";
export const Colors: ColorsType = {
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
  },
};

export interface ColorsType {
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
  };
}

const ThemeContext = React.createContext<ColorsType>(Colors);
// Creating a namespaced theming object.
export const theming = createTheming(ThemeContext);
export const {
  ThemeProvider: SinaBaseThemeProvider,
  useTheme,
  context,
  withTheme,
} = theming;
