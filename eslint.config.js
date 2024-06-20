import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import json from "eslint-plugin-json";

export default withNuxt([
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.json"],
    ...json.configs["recommended"]
  },
  {
    rules: {
      "prettier/prettier": "warn",
      "vue/no-multiple-template-root": "off",
      "vue/block-order": [
        "warn",
        {
          order: ["template", "style", "script"]
        }
      ]
    }
  }
]);
