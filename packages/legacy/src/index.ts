import type { FlatESLintConfigItem } from 'eslint-define-config';

import globals from 'globals';

export const legacy = (): FlatESLintConfigItem[] => {
  return [{
    rules: {
      'prefer-numeric-literals': 'off',
      'no-restricted-properties': ['error', {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      }],
      'no-var': 'off',
      'prefer-object-spread': 'off',
      strict: ['error', 'safe']
    },
    languageOptions: {
      globals: globals.browser
    }
  }];
};
