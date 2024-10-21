export default [
  {
    files: ["*.vue", "*.ts"],
    ignores: ["dist/", "node_modules/"],
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    plugins: {
      vue: "eslint-plugin-vue",
      prettier: "eslint-plugin-prettier",
    },
    rules: {
      "vue/no-unused-vars": "error",
      "vue/multi-word-component-names": "off",
      "prettier/prettier": "error",
    },
  },
];
