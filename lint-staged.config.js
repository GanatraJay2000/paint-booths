// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": () => [`yarn eslint --fix .`, `yarn prettier --write .`],

  // Format MarkDown and JSON
  "**/*.(md|json)": () => `yarn prettier --write .`,
};
