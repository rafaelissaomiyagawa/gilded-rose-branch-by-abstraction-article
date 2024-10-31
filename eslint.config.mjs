import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {globals: globals.browser},
        rules: {
            eqeqeq: ["error", "smart"],
        },
    },
    pluginJs.configs.recommended,
];
