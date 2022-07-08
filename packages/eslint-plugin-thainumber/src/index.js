require("ts-node").register();

const rules = require("./index.ts").default;

module.exports = {
  rules: rules,
};
