import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt([
  eslintPluginPrettierRecommended,
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
