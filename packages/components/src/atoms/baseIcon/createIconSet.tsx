import { CSSProperties, useContext } from "react";
import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils/src";
import { UnitContext } from "../../theme/context";
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

// type ArrayElement<T extends Array<any>> = T extends Array<infer R> ? R : any;

export interface IconTemplateProps {
  iconsJson: IcomoonIconSetProps;
  size: { width: number; height: number };
  name?: IconsNames;
  color?: string | string[];
  // | { fill?: string; stroke?: string }[]
  // | { fill?: string; stroke?: string };
  style?: CSSProperties;
}

// function isSingleObject(
//   color: IconTemplateProps["color"],
// ): color is { fill?: string; stroke?: string } {
//   return typeof color === "object" && ("fill" in color || "stroke" in color);
// }

// function isArrayOfObjects(
//   color: IconTemplateProps["color"],
// ): color is { fill?: string; stroke?: string }[] {
//   return (
//     Array.isArray(color) &&
//     //@ts-ignore
//     color.every(
//       //@ts-ignore
//       (obj) => obj instanceof Object && ("fill" in obj || "stroke" in obj),
//     )
//   );
// }

export function IconTemplate({
  iconsJson,
  color,
  ...props
}: IconTemplateProps) {
  const { unit } = useContext(UnitContext);
  const { height, width } = props.size;
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;

  let realWidth: number | null = null;
  let realHeight: number | null = null;

  if (unit === "pixel") {
    realWidth = width;
    realHeight = height;
  } else if (unit === "viewport") {
    realWidth = pxToVh(width) * vh;
    realHeight = pxToVh(height) * vh;
  }

  let viewBox = "0 0 1024 1024";

  if (realWidth && realHeight && realWidth > realHeight) {
    const ratio = realHeight / realWidth;
    const viewPortH = ratio * iconsJson.height;
    const viewPortW = iconsJson.height;
    const viewPortX = 0;
    const viewPortY = viewPortW - viewPortH;
    viewBox = `${viewPortX} ${viewPortY / 2} ${viewPortW} ${viewPortH}`;
  } else if (realWidth && realHeight && realWidth < realHeight) {
    const ratio = realWidth / realHeight;
    const viewPortW = ratio * iconsJson.height;
    const viewPortH = iconsJson.height;
    const viewPortY = 0;
    const viewPortX = viewPortH - viewPortW;
    viewBox = `${viewPortX / 2} ${viewPortY} ${viewPortW} ${viewPortH}`;
  }

  const glyph = props.name
    ? iconsJson.icons.find(({ properties }) => properties.name === props.name)
    : null;

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      width={realWidth || 0}
      height={realHeight || 0}
    >
      {(glyph?.icon.paths as string[]).map((d, index) => {
        return (
          <path
            key={index}
            d={d}
            {...glyph?.attrs[index]}
            //@ts-ignore
            fill={
              Array.isArray(color)
                ? color[index]
                : color || glyph?.attrs[index].fill
            }
            // fill={
            //   typeof color === "string"
            //     ? color
            //     : isArrayOfObjects(color)
            //     ? color[index]?.fill || glyph?.attrs[index].fill
            //     : Array.isArray(color)
            //     ? color[index] || glyph?.attrs[index].fill
            //     : isSingleObject(color)
            //     ? color?.fill
            //     : glyph?.attrs[index].fill
            // }
            // stroke={
            //   typeof color === "string"
            //     ? color
            //     : isArrayOfObjects(color)
            //     ? color[index]?.stroke || glyph?.attrs[index].stroke
            //     : glyph?.attrs[index].stroke
            // }
          />
        );
      })}
    </svg>
  );
}
