// @ts-expect-error -- no types
import eslint_js from '@eslint/js';

import { best_practices } from './modules/best-practices';
import { errors } from './modules/errors';
import { es6 } from './modules/es6';
import { style } from './modules/style';
import { variables } from './modules/variables';
import { sukka } from './modules/sukka';
import { imports } from './modules/imports';

import globals from 'globals';

import { constants } from '@eslint-sukka/shared';

import type { FlatESLintConfigItem, LanguageOptions } from 'eslint-define-config';

export interface OptionsJavaScript {
  /**
   * Apply the config to specific files. Default to eslint default.
   *
   * @default undefined
   */
  files?: FlatESLintConfigItem['files'] | undefined,
  isInEditor?: boolean,
  /**
   * Disable `no-console` rule in CLI files.
   *
   * - true: disable `no-console` in preset files glob
   * - false: do not disable `no-console`
   * - string | string[]: custom glob to disable `no-console`
   *
   * @default true
   */
  disableNoConsoleInCLI?: boolean | string | string[],
  env?: {
    // env
    /**
     * Enable Node.js global variables and Node.js scoping.
     *
     * @default false
     */
    node?: boolean,
    /**
     * Enable browser global variables.
     *
     * @default true
     */
    browser?: boolean,
    /**
     * Enable webextensions global variables.
     *
     * @default false
     */
    webextensions?: boolean,
    /**
     * Enable userscript global variables.
     *
     * @default false
     */
    greasemonkey?: boolean,
    /**
     * Custom global variables.
     *
     * @see [Configuring global variables](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-global-variables)
     */
    customGlobals?: LanguageOptions['globals']
  }
}

const allExtensions = ['.js', '.jsx', '.mjs', '.cjs'];

export const javascript = (options: OptionsJavaScript = {}): FlatESLintConfigItem[] => {
  const {
    files,
    isInEditor = false,
    disableNoConsoleInCLI = true,
    env = {}
  } = options;
  const { node = false, browser = true, webextensions = false, greasemonkey = false, customGlobals = {} } = env;

  const configs: FlatESLintConfigItem[] = [
    eslint_js.configs.recommended,
    {
      ...(files ? files : {}),
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        },
        globals: {
          ...globals.es2021,
          ...(browser && globals.browser),
          ...(node && globals.node),
          ...(webextensions && globals.webextensions),
          ...(greasemonkey && globals.greasemonkey),
          ...customGlobals
        }
      },
      settings: {
        'import/extensions': allExtensions
      },
      plugins: {
        ...best_practices.plugins,
        ...errors.plugins,
        ...es6.plugins,
        ...style.plugins,
        ...variables.plugins,
        ...sukka.plugins,
        ...imports.plugins
      },
      rules: {
        ...best_practices.rules,
        ...errors.rules,
        ...es6.rules,
        ...style.rules,
        ...variables.rules,
        ...sukka.rules,
        ...imports.rules,

        'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error'
      }
    }
  ];

  if (disableNoConsoleInCLI !== false) {
    const customGlobs = typeof disableNoConsoleInCLI !== 'boolean' ? (Array.isArray(disableNoConsoleInCLI) ? disableNoConsoleInCLI : [disableNoConsoleInCLI]) : null;
    configs.push({
      files: customGlobs ?? [`**/scripts/${constants.GLOB_SRC}`, `**/cli/${constants.GLOB_SRC}`, `**/cli.${constants.GLOB_SRC_EXT}`],
      rules: {
        'no-console': 'off'
      }
    });
  }

  return configs;
};

export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED__ = {
  best_practices,
  errors,
  es6,
  style,
  variables,
  sukka,
  imports
};
