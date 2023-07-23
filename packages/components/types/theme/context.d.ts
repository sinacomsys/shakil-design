import React from "react";
export declare const Colors: ColorsType;
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
export declare const theming: import("theming").Theming<ColorsType>;
export declare const SinaBaseThemeProvider: React.ComponentClass<import("theming").ThemeProviderProps<ColorsType>, any> | React.FunctionComponent<import("theming").ThemeProviderProps<ColorsType>>, useTheme: <CustomTheme = ColorsType>() => CustomTheme, context: React.Context<ColorsType>, withTheme: <InnerProps extends {
    theme: ColorsType;
}, InnerComponent extends React.ComponentType<InnerProps>, OuterProps extends InnerProps & {
    theme?: ColorsType | undefined;
}>(comp: InnerComponent) => React.ComponentType<OuterProps>;
