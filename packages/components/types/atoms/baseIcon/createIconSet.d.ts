import { CSSProperties } from "react";
import { IconsNames } from "./iconNames";
export interface IcomoonIconSetProps {
  icons: {
    icon: {
      paths: string[];
      attrs: {
        fill?: string;
      }[];
      isMulticolor: boolean;
      isMulticolor2: boolean;
      grid: number;
      tags: string[];
    };
    attrs: {
      fill?: string;
      stroke?: string;
    }[];
    properties: {
      order: number;
      id: number;
      name: string;
      prevSize: number;
      code: number;
    };
    setIdx: number;
    setId: number;
    iconIdx: number;
  }[];
  IcoMoonType: string;
  height: number;
  metadata: {
    name: string;
  };
  preferences: {
    showGlyphs: boolean;
    showQuickUse: boolean;
    showQuickUse2: boolean;
    showSVGs: boolean;
    fontPref: {
      prefix: string;
      metadata: {
        fontFamily: string;
      };
      metrics: {
        emSize: number;
        baseline: number;
        whitespace: number;
      };
      embed: boolean;
    };
    imagePref: {
      prefix: string;
      png: boolean;
      useClassSelector: boolean;
      color: number;
      bgColor: number;
      classSelector: string;
    };
    historySize: number;
    showCodes: boolean;
    gridSize: number;
  };
}
export interface IconTemplateProps {
  iconsJson: IcomoonIconSetProps;
  size: {
    width: number;
    height: number;
  };
  name?: IconsNames;
  color?: string | string[];
  style?: CSSProperties;
}
export declare function IconTemplate({
  iconsJson,
  color,
  ...props
}: IconTemplateProps): import("react/jsx-runtime").JSX.Element;
