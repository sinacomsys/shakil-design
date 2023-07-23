import React from "react";
import { createTheming } from "react-jss";
export const Colors: ColorsType = {
  color_primary_1: "#374775",
  color_primary_2: "#6c7797",
  color_primary_3: "#959db8",
  color_primary_4: "#abb6d6",
  color_primary_5: "#c2c9db",
  color_primary_6: "#e3e6f1",
  color_primary_7: "#ebedf2",
  color_secondary_1: "#58cc87",
  color_secondary_2: "#48e580",
  color_secondary_3: "#e3f6eb",
  color_gray_6: "#333333",
  color_gray_5: "#606060",
  color_gray_4: "#9f9f9f",
  color_gray_3: "#c1c0c0",
  color_gray_2: "#e9e9e9",
  color_background: "#eeeeee",
  color_white: "#ffffff",
  color_danger_1: "#c65161",
  color_danger_2: "#ebcbcf",
  color_danger_3: "#ffe0ce",
  color_warning_1: "#ffc917",
  color_warning_2: "#fff0be",
  color_warning_3: "#ff8946",
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
