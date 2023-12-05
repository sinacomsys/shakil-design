import React from "react";
import { Unit } from "../types";
export declare const Colors: ColorsType;
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
    errorMessage: string;
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
export declare const UnitContext: React.Context<{
  unit?: Unit | undefined;
}>;
declare const theming: import("theming").Theming<ColorsType>;
declare const ThemeProvider:
    | React.ComponentClass<
        import("theming").ThemeProviderProps<ColorsType>,
        any
      >
    | React.FunctionComponent<import("theming").ThemeProviderProps<ColorsType>>,
  rest: {
    context: React.Context<ColorsType>;
    withTheme: <
      InnerProps extends {
        theme: ColorsType;
      },
      InnerComponent extends React.ComponentType<InnerProps>,
      OuterProps extends InnerProps & {
        theme?: ColorsType | undefined;
      },
    >(
      comp: InnerComponent,
    ) => React.ComponentType<OuterProps>;
    useTheme: <CustomTheme = ColorsType>() => CustomTheme;
  };
declare const ShakilDesignThemeProvider: ({
  children,
  colors,
  unit,
}: {
  children: React.ReactNode;
  colors: ColorsType;
  unit?: Unit | undefined;
}) => import("react/jsx-dev-runtime").JSX.Element;
export type { ColorsType };
export { ShakilDesignThemeProvider, rest, ThemeProvider, theming };
