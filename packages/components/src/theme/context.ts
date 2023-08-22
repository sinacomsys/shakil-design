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
};

export interface ColorsType {
  color_primary_1?: string;
  color_primary_2?: string;
  color_primary_3?: string;
  color_primary_4?: string;
  color_primary_5?: string;
  color_primary_6?: string;
  color_primary_7?: string;
  color_secondary_1?: string;
  color_secondary_2?: string;
  color_secondary_3?: string;
  color_gray_6?: string;
  color_gray_5?: string;
  color_gray_4?: string;
  color_gray_3?: string;
  color_gray_2?: string;
  color_background?: string;
  color_white?: string;
  color_danger_1?: string;
  color_danger_2?: string;
  color_danger_3?: string;
  color_warning_1?: string;
  color_warning_2?: string;
  color_warning_3?: string;
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
