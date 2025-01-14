// This file is generated by scripts/codegen.ts
// DO NOT EDIT THIS FILE MANUALLY
import type { SukkaESLintRuleConfig } from '@eslint-sukka/shared';
import ts_eslint_plugin from '@typescript-eslint/eslint-plugin';

export const generated_overrides: SukkaESLintRuleConfig = {
  plugins: {
    '@typescript-eslint': ts_eslint_plugin as any
  },
  rules: {
    "class-methods-use-this": "off",
    "@typescript-eslint/class-methods-use-this": [
      "error",
      {
        "exceptMethods": []
      }
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false
      }
    ],
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      "never"
    ],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "semi": "off",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true,
        "variables": true
      }
    ]
  }
};
