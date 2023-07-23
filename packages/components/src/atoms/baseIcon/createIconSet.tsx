import { CSSProperties } from "react";
import { useWindowSize } from "usehooks-ts";
import { Unit } from ".";

export interface CreateIcomoonIconSetProps {
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

export function createIcomoonIconSet(glyphMap: CreateIcomoonIconSetProps) {
  const Icon = (props: {
    size: { width: number; height: number };
    name?: string;
    color?: string | string[];
    style?: CSSProperties;
    unit: Unit;
  }) => {
    const { height, width } = props.size;

    const { height: windowHeight } = useWindowSize();
    const vh = windowHeight / 100;

    let realWidth: number | null = null;
    let realHeight: number | null = null;

    if (props.unit === "pixel") {
      realWidth = width;
      realHeight = height;
    } else if (props.unit === "viewPort") {
      realWidth = width * vh;
      realHeight = height * vh;
    }

    let viewBox = "0 0 1024 1024";

    if (realWidth && realHeight && realWidth > realHeight) {
      const ratio = realHeight / realWidth;
      const viewPortH = ratio * glyphMap.height;
      const viewPortW = glyphMap.height;
      const viewPortX = 0;
      const viewPortY = viewPortW - viewPortH;
      viewBox = `${viewPortX} ${viewPortY / 2} ${viewPortW} ${viewPortH}`;
    } else if (realWidth && realHeight && realWidth < realHeight) {
      const ratio = realWidth / realHeight;
      const viewPortW = ratio * glyphMap.height;
      const viewPortH = glyphMap.height;
      const viewPortY = 0;
      const viewPortX = viewPortH - viewPortW;
      viewBox = `${viewPortX / 2} ${viewPortY} ${viewPortW} ${viewPortH}`;
    }

    const glyph = props.name
      ? glyphMap.icons.find(({ properties }) => properties.name === props.name)
      : null;

    return (
      <svg
        // xmlns="http://www.w3.org/2000/svg"
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
              fill={
                Array.isArray(props.color)
                  ? props.color[index]
                  : props.color || glyph?.attrs[index].fill
              }
            />
          );
        })}
      </svg>
    );
  };

  return Icon;
}
