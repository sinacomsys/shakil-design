/**
 * Every time fonts icon changed, you should resolve types. this script doing
 * that automatically
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("@sina-base/asset/src/icomoon/selection.json");

const icons = {};
const types = [];

config.icons = config.icons.map((icon) => ({
  ...icon,
  code: icon.properties.code,
  name: icon.properties.name,
  // .replace(/-[\w]/g, str => {
  //   return str[1].toUpperCase();
  // }),
}));

config.icons = config.icons.sort(({ name: a }, { name: b }) => a - b);

config.icons.forEach(({ name, code }) => {
  icons[name] = Number(code).toString(16);
});

config.icons.forEach(({ name }) => {
  types.push(`${name}`);
});

fs.writeFileSync(
  resolvePath("./iconsContent.ts"),
  `// Auto generate
  export const iconsContent = ${JSON.stringify(icons)}`,
);
fs.writeFileSync(
  resolvePath("./iconNames.ts"),
  `// Auto generate
  export type IconsNames = ${types.map((name) => `"${name}"`).join("\n|")}
  `,
);
