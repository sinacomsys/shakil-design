/// <reference types="react" />
import { ShakilDesignThemeProvider, theming, Colors } from "./context";
import type { ColorsType } from "./context";
declare const useTheme: <CustomTheme = ColorsType>() => CustomTheme, context: import("react").Context<ColorsType>, withTheme: <InnerProps extends {
    theme: ColorsType;
}, InnerComponent extends import("react").ComponentType<InnerProps>, OuterProps extends InnerProps & {
    theme?: ColorsType | undefined;
}>(comp: InnerComponent) => import("react").ComponentType<OuterProps>;
export { ColorsType, ShakilDesignThemeProvider, context, useTheme, withTheme, theming, Colors, };
