module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
