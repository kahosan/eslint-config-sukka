import { javascript as eslint_config_sukka_js } from '../src/modules/javascript';

import { plugin as ts_eslint_plugin } from 'typescript-eslint';

import fs from 'node:fs';
import path from 'node:path';

const DISABLED_RULES = new Set([
  'no-redeclare',
  'no-dupe-class-members'
]);

(async () => {
  const { default: stringifyObject } = await import('stringify-object');

  const TS_ESLINT_BASE_RULES_TO_BE_OVERRIDDEN = new Map<string, string>(
    Object.entries(ts_eslint_plugin.rules!)
      // https://github.com/sweepline/eslint-plugin-unused-imports/blob/2563edf7d7894e0cc05163d9e9180bc3c56471cc/lib/rules/no-unused-imports.js#L15
      .reduce<Array<[baseRuleName: string, ruleName: string]>>((acc, [ruleName, rule]) => {
        if (
          'meta' in rule && rule.meta
          && 'docs' in rule.meta && rule.meta.docs && typeof rule.meta.docs === 'object'
          && 'extendsBaseRule' in rule.meta.docs
          && rule.meta.docs.extendsBaseRule != null
        ) {
          acc.push([
            typeof rule.meta.docs.extendsBaseRule === 'string'
              ? rule.meta.docs.extendsBaseRule
              : ruleName,
            ruleName
          ]);
        }
        return acc;
      }, [])
  );

  const rules = Object.fromEntries(
    Object.entries(
      eslint_config_sukka_js()
        .reduce((acc, cur) => ({ ...acc, ...cur.rules }), {})
    )
      // .filter(([, value]) => {
      //   if (typeof value === 'string') {
      //     return value !== 'off';
      //   }
      //   if (typeof value === 'number') {
      //     return value !== 0;
      //   }
      //   if (Array.isArray(value)) {
      //     return value.length !== 0 && value[0] !== 'off';
      //   }
      //   return true;
      // })
      .reduce((acc, [baseRuleName, value]) => {
        switch (baseRuleName) {
          case 'camelcase':
          case 'no-restricted-imports': {
            // disable camelcase directly, use custom @typescript-eslint/naming-convention instead
            // disable no-restricted-imports directly, use @typescript-eslint/no-restricted-imports instead

            // @ts-expect-error -- no type overlap between eslint and typescript-eslint
            acc.push([baseRuleName, 'off']);

            break;
          }
          case 'sukka/no-return-await': {
            acc.push(
              // @ts-expect-error -- no type overlap between eslint and typescript-eslint
              [baseRuleName, 'off'],
              ['@typescript-eslint/return-await', 'error']
            );

            break;
          }
          case 'no-loss-of-precision': {
            // do nothing

            // @typescript-eslint/no-loss-of-precision is deprecated
            // The original rule is recommended instead

            break;
          }
          default: if (TS_ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(baseRuleName)) {
            const replacementRulename = TS_ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.get(baseRuleName)!;
            acc.push(
              // @ts-expect-error -- no type overlap between eslint and typescript-eslint
              [baseRuleName, 'off'],
              [`@typescript-eslint/${replacementRulename}`, DISABLED_RULES.has(baseRuleName) ? 'off' : value]
            );
          } else if (
            baseRuleName.startsWith('autofix/')
            && TS_ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(baseRuleName.slice(8))) {
            const replacementRulename = TS_ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.get(baseRuleName.slice(8))!;

            acc.push(
              // @ts-expect-error -- no type overlap between eslint and typescript-eslint
              [baseRuleName, 'off'],
              [`autofix/${baseRuleName}`, 'off'],
              [`@typescript-eslint/${replacementRulename}`, value]
            );
          }
        }
        return acc;
      }, [])
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../src/modules/_generated_typescript_overrides.ts'),
    [
      '// This file is generated by scripts/codegen.ts',
      '// DO NOT EDIT THIS FILE MANUALLY',
      'import type { SukkaESLintRuleConfig } from \'@eslint-sukka/shared\';',
      '',
      'export const generated_typescript_overrides: SukkaESLintRuleConfig = {',
      `  rules: ${stringifyObject(rules, { indent: '  ', singleQuotes: true }).split('\n').map((line) => `  ${line}`).join('\n').trimStart()}`,
      '};',
      ''
    ].join('\n')
  );
})();
