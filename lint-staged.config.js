// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}\n`,
    `yarn prettier --write ${filenames.join(" ")}\n`,
  ],
  "**/*.(*test).(ts|tsx)": (fileName) => [`yarn test ${fileName.join(" ")}\n`],
  // Format MarkDown and JSON
  "**/*.(md|json|ts|tsx|js|scss|css)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}\n`,
};
