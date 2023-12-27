import { pxToVhString, pxToVwString } from "@shakil-design/utils/src";

const isInclude = (a?: string, b?: string) => {
  return a?.toLowerCase().includes((b || "")?.toLowerCase() || "");
};

const convertCornerRadius = (value: string) => {
  const splitedValue = value.split(" ");
  return splitedValue
    .map((item, index) => {
      if ((index === 0 || index === 2) && isInclude(item, "px")) {
        return pxToVwString(parseInt(item, 10));
      } else if ((index === 1 || index === 3) && isInclude(item, "px")) {
        return pxToVhString(parseInt(item, 10));
      } else return item;
    })
    .join(" ");
};

const yAxisSpacing = (value: string) => {
  const splitedValue = value.split(" ");
  return splitedValue
    .map((item) => {
      if (isInclude(item, "px")) {
        return pxToVhString(parseInt(item, 10));
      }
      return item;
    })
    .join(" ");
};
const xAxisSpacing = (value: string) => {
  const splitedValue = value.split(" ");
  return splitedValue
    .map((item) => {
      if (isInclude(item, "px")) {
        return pxToVwString(parseInt(item, 10));
      }
      return item;
    })
    .join(" ");
};

const convertBothAxis = (value: string) => {
  const splitedValue = value.split(" ");
  return splitedValue
    .map((item, index) => {
      if ((index === 0 || index === 2) && isInclude(item, "px")) {
        return pxToVhString(parseInt(item, 10));
      } else if ((index === 1 || index === 3) && isInclude(item, "px")) {
        return pxToVwString(parseInt(item, 10));
      } else return item;
    })
    .join(" ");
};

const units: Record<string, (value: string) => string> = {
  border: yAxisSpacing,
  "border-bottom": yAxisSpacing,
  "border-bottom-left-radius": convertCornerRadius,
  "border-bottom-right-radius": convertCornerRadius,
  "border-bottom-width": yAxisSpacing,
  "border-left": xAxisSpacing,
  "border-left-width": xAxisSpacing,
  "border-radius": convertBothAxis,
  "border-right": xAxisSpacing,
  "border-right-width": xAxisSpacing,
  "border-top": yAxisSpacing,
  "border-top-left-radius": convertCornerRadius,
  "border-top-right-radius": convertCornerRadius,
  "border-top-width": yAxisSpacing,
  "border-width": yAxisSpacing,
  "border-block": yAxisSpacing,
  "border-block-end": yAxisSpacing,
  "border-block-end-width": yAxisSpacing,
  "border-block-start": yAxisSpacing,
  "border-block-start-width": yAxisSpacing,
  "border-block-width": yAxisSpacing,
  "border-inline": xAxisSpacing,
  "border-inline-end": xAxisSpacing,
  "border-inline-end-width": xAxisSpacing,
  "border-inline-start": xAxisSpacing,
  "border-inline-start-width": xAxisSpacing,
  "border-inline-width": xAxisSpacing,
  "border-start-start-radius": convertCornerRadius,
  "border-start-end-radius": convertCornerRadius,
  "border-end-start-radius": convertCornerRadius,
  "border-end-end-radius": convertCornerRadius,
  margin: convertBothAxis,
  "margin-bottom": yAxisSpacing,
  "margin-left": xAxisSpacing,
  "margin-right": xAxisSpacing,
  "margin-top": yAxisSpacing,
  "margin-block": yAxisSpacing,
  "margin-block-end": yAxisSpacing,
  "margin-block-start": yAxisSpacing,
  "margin-inline": xAxisSpacing,
  "margin-inline-end": xAxisSpacing,
  "margin-inline-start": xAxisSpacing,
  padding: convertBothAxis,
  "padding-bottom": yAxisSpacing,
  "padding-left": xAxisSpacing,
  "padding-right": xAxisSpacing,
  "padding-top": yAxisSpacing,
  "padding-block": yAxisSpacing,
  "padding-block-end": yAxisSpacing,
  "padding-block-start": yAxisSpacing,
  "padding-inline": xAxisSpacing,
  "padding-inline-end": xAxisSpacing,
  "padding-inline-start": xAxisSpacing,
  height: yAxisSpacing,
  width: xAxisSpacing,
  "min-height": yAxisSpacing,
  "max-height": yAxisSpacing,
  "min-width": xAxisSpacing,
  "max-width": xAxisSpacing,
  bottom: yAxisSpacing,
  left: xAxisSpacing,
  top: yAxisSpacing,
  right: xAxisSpacing,
  inset: convertBothAxis,
  "inset-block": yAxisSpacing,
  "inset-block-end": yAxisSpacing,
  "inset-block-start": yAxisSpacing,
  "inset-inline": xAxisSpacing,
  "inset-inline-end": xAxisSpacing,
  "inset-inline-start": xAxisSpacing,
  "box-shadow": yAxisSpacing,

  "column-gap": xAxisSpacing,
  "column-rule": xAxisSpacing,
  "column-rule-width": xAxisSpacing,
  "column-width": xAxisSpacing,
  "font-size": yAxisSpacing,
  "letter-spacing": xAxisSpacing,
  "word-spacing": xAxisSpacing,
  "transform-origin-x": xAxisSpacing,
  "transform-origin-y": yAxisSpacing,
  "vertical-align": yAxisSpacing,
  "flex-basis": xAxisSpacing,
  "shape-margin": xAxisSpacing,
  gap: convertBothAxis,
  "grid-gap": convertBothAxis,
  "row-gap": yAxisSpacing,
  "grid-row-gap": yAxisSpacing,
  "grid-column-gap": xAxisSpacing,
  "grid-template-rows": yAxisSpacing,
  "grid-template-columns": xAxisSpacing,
  "grid-auto-rows": yAxisSpacing,
  "grid-auto-columns": xAxisSpacing,
};

const convertPxToVp = (style: any): any => {
  if (Array.isArray(style)) {
    return style.map((i) => convertPxToVp(i));
  }

  for (const property in style) {
    const propertyValue = style[property];
    if (typeof propertyValue === "string" && !isInclude(propertyValue, "px")) {
      continue;
    }
    if (
      style["same-size"] === true &&
      (property === "width" || property === "height") &&
      units[property]
    ) {
      style["width"] = units["height"](propertyValue);
      style["height"] = units["height"](propertyValue);
    } else if (units[property]) {
      style[property] = units[property](propertyValue);
    }
  }
  delete style["same-size"];
  return style;
};

export { convertPxToVp };
