// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- eslint-plugin-unicorn has no types at all
// @ts-nocheck

// @masknet/eslint-plugin
import array$no_unneeded_flat_map from '@masknet/eslint-plugin/rules/array/no-unneeded-flat-map.js';
import browser$prefer_location_assign from '@masknet/eslint-plugin/rules/browser/prefer-location-assign.js';
import jsx$no_template_literal from '@masknet/eslint-plugin/rules/jsx/no-template-literal.js';
import jsx$no_unneeded_nested from '@masknet/eslint-plugin/rules/jsx/no-unneeded-nested.js';
import string$no_locale_case from '@masknet/eslint-plugin/rules/string/no-locale-case.js';
import string$no_simple_template_literal from '@masknet/eslint-plugin/rules/string/no-simple-template-literal.js';
import type$no_instanceof_wrapper from '@masknet/eslint-plugin/rules/type/no-instanceof-wrapper.js';
import unicode$no_bidi from '@masknet/eslint-plugin/rules/unicode/no-bidi.js';
import unicode$no_invisible from '@masknet/eslint-plugin/rules/unicode/no-invisible.js';
import no_redundant_variable from '@masknet/eslint-plugin/rules/no-redundant-variable.js';
import no_single_return from '@masknet/eslint-plugin/rules/no-single-return.js';
import prefer_early_return from '@masknet/eslint-plugin/rules/prefer-early-return.js';
import prefer_fetch from '@masknet/eslint-plugin/rules/prefer-fetch.js';
import prefer_timer_id from '@masknet/eslint-plugin/rules/prefer-timer-id.js';
import string$no_unneeded_to_string from '@masknet/eslint-plugin/rules/string/no-unneeded-to-string.js';
import type$no_force_cast_via_top_type from '@masknet/eslint-plugin/rules/type/no-force-cast-via-top-type.js';
import type$no_wrapper_type_reference from '@masknet/eslint-plugin/rules/type/no-wrapper-type-reference.js';
import no_default_error from '@masknet/eslint-plugin/rules/no-default-error.js';

// eslint-plugin-unicorn
// eslint-plugin-unicorn introduces way too many dependencies, let's bundle & tree shake them
import getDocumentationUrl from 'eslint-plugin-unicorn/rules/utils/get-documentation-url.js';

import no_nested_ternary from 'eslint-plugin-unicorn/rules/no-nested-ternary.js';
import prefer_event_target from 'eslint-plugin-unicorn/rules/prefer-event-target.js';
import prefer_keyboard_event_key from 'eslint-plugin-unicorn/rules/prefer-keyboard-event-key.js';
import prefer_dom_node_text_content from 'eslint-plugin-unicorn/rules/prefer-dom-node-text-content.js';
import require_array_join_separator from 'eslint-plugin-unicorn/rules/require-array-join-separator.js';
import no_thenable from 'eslint-plugin-unicorn/rules/no-thenable.js';
import no_invalid_remove_event_listener from 'eslint-plugin-unicorn/rules/no-invalid-remove-event-listener.js';
import consistent_function_scoping from 'eslint-plugin-unicorn/rules/consistent-function-scoping.js';
import no_new_buffer from 'eslint-plugin-unicorn/rules/no-new-buffer.js';
import no_console_spaces from 'eslint-plugin-unicorn/rules/no-console-spaces.js';
import no_empty_file from 'eslint-plugin-unicorn/rules/no-empty-file.js';
import no_useless_fallback_in_spread from 'eslint-plugin-unicorn/rules/no-useless-fallback-in-spread.js';
import no_useless_length_check from 'eslint-plugin-unicorn/rules/no-useless-length-check.js';
import no_useless_promise_resolve_reject from 'eslint-plugin-unicorn/rules/no-useless-promise-resolve-reject.js';
import no_zero_fractions from 'eslint-plugin-unicorn/rules/no-zero-fractions.js';
import prefer_export_from from 'eslint-plugin-unicorn/rules/prefer-export-from.js';
import prefer_native_coercion_functions from 'eslint-plugin-unicorn/rules/prefer-native-coercion-functions.js';
import no_document_cookie from 'eslint-plugin-unicorn/rules/no-document-cookie.js';
import prefer_add_event_listener from 'eslint-plugin-unicorn/rules/prefer-add-event-listener.js';
import prefer_array_index_of from 'eslint-plugin-unicorn/rules/prefer-array-index-of.js';
import prefer_blob_reading_methods from 'eslint-plugin-unicorn/rules/prefer-blob-reading-methods.js';
import prefer_date_now from 'eslint-plugin-unicorn/rules/prefer-date-now.js';
import prefer_dom_node_dataset from 'eslint-plugin-unicorn/rules/prefer-dom-node-dataset.js';
import prefer_math_trunc from 'eslint-plugin-unicorn/rules/prefer-math-trunc.js';
import prefer_modern_math_apis from 'eslint-plugin-unicorn/rules/prefer-modern-math-apis.js';
import number_literal_case from 'eslint-plugin-unicorn/rules/number-literal-case.js';
import prefer_number_properties from 'eslint-plugin-unicorn/rules/prefer-number-properties.js';
import prefer_reflect_apply from 'eslint-plugin-unicorn/rules/prefer-reflect-apply.js';
import prefer_set_size from 'eslint-plugin-unicorn/rules/prefer-set-size.js';
import prefer_string_replace_all from 'eslint-plugin-unicorn/rules/prefer-string-replace-all.js';
import prefer_string_slice from 'eslint-plugin-unicorn/rules/prefer-string-slice.js';
import prefer_string_trim_start_end from 'eslint-plugin-unicorn/rules/prefer-string-trim-start-end.js';
import no_unreadable_iife from 'eslint-plugin-unicorn/rules/no-unreadable-iife.js';
import throw_new_error from 'eslint-plugin-unicorn/rules/throw-new-error.js';
import better_regex from 'eslint-plugin-unicorn/rules/better-regex.js';
import escape_case from 'eslint-plugin-unicorn/rules/escape-case.js';
import no_hex_escape from 'eslint-plugin-unicorn/rules/no-hex-escape.js';
import prefer_prototype_methods from 'eslint-plugin-unicorn/rules/prefer-prototype-methods.js';
import relative_url_style from 'eslint-plugin-unicorn/rules/relative-url-style.js';
import error_message from 'eslint-plugin-unicorn/rules/error-message.js';
import no_instanceof_array from 'eslint-plugin-unicorn/rules/no-instanceof-array.js';
import prefer_type_error from 'eslint-plugin-unicorn/rules/prefer-type-error.js';

// eslint-plugin-sukka
import ban_eslint_disable from './rules/ban-eslint-disable';

export default {
  rules: {
    'array/no-unneeded-flat-map': array$no_unneeded_flat_map,
    'browser/prefer-location-assign': browser$prefer_location_assign,
    'jsx/no-template-literal': jsx$no_template_literal,
    'jsx/no-unneeded-nested': jsx$no_unneeded_nested,
    'string/no-locale-case': string$no_locale_case,
    'string/no-simple-template-literal': string$no_simple_template_literal,
    'type/no-instanceof-wrapper': type$no_instanceof_wrapper,
    'unicode/no-bidi': unicode$no_bidi,
    'unicode/no-invisible': unicode$no_invisible,
    'ban-eslint-disable': ban_eslint_disable,
    'no-redundant-variable': no_redundant_variable,
    'no-single-return': no_single_return,
    'prefer-early-return': prefer_early_return,
    'prefer-fetch': prefer_fetch,
    'prefer-timer-id': prefer_timer_id,

    // eslint-plugin-unicorn
    'unicorn/no-nested-ternary': loadUnicorn(no_nested_ternary, 'unicorn/no-nested-ternary'),
    'unicorn/prefer-event-target': loadUnicorn(prefer_event_target, 'unicorn/prefer-event-target'),
    'unicorn/prefer-keyboard-event-key': loadUnicorn(prefer_keyboard_event_key, 'unicorn/prefer-keyboard-event-key'),
    'unicorn/prefer-text-content': loadUnicorn(prefer_dom_node_text_content, 'unicorn/prefer-text-content'),
    'unicorn/require-array-join-separator': loadUnicorn(require_array_join_separator, 'unicorn/require-array-join-separator'),
    'unicorn/no-thenable': loadUnicorn(no_thenable, 'unicorn/no-thenable'),
    'unicorn/no-invalid-remove-event-listener': loadUnicorn(no_invalid_remove_event_listener, 'unicorn/no-invalid-remove-event-listener'),
    'unicorn/consistent-function-scoping': loadUnicorn(consistent_function_scoping, 'unicorn/consistent-function-scoping'),
    'unicorn/no-new-buffer': loadUnicorn(no_new_buffer, 'unicorn/no-new-buffer'),
    'unicorn/no-console-spaces': loadUnicorn(no_console_spaces, 'unicorn/no-console-spaces'),
    'unicorn/no-empty-file': loadUnicorn(no_empty_file, 'unicorn/no-empty-file'),
    'unicorn/no-useless-fallback-in-spread': loadUnicorn(no_useless_fallback_in_spread, 'unicorn/no-useless-fallback-in-spread'),
    'unicorn/no-useless-length-check': loadUnicorn(no_useless_length_check, 'unicorn/no-useless-length-check'),
    'unicorn/no-useless-promise-resolve-reject': loadUnicorn(no_useless_promise_resolve_reject, 'unicorn/no-useless-promise-resolve-reject'),
    'unicorn/no-zero-fractions': loadUnicorn(no_zero_fractions, 'unicorn/no-zero-fractions'),
    'unicorn/prefer-export-from': loadUnicorn(prefer_export_from, 'unicorn/prefer-export-from'),
    'unicorn/prefer-native-coercion-functions': loadUnicorn(prefer_native_coercion_functions, 'unicorn/prefer-native-coercion-functions'),
    'unicorn/no-document-cookie': loadUnicorn(no_document_cookie, 'unicorn/no-document-cookie'),
    'unicorn/prefer-add-event-listener': loadUnicorn(prefer_add_event_listener, 'unicorn/prefer-add-event-listener'),
    'unicorn/prefer-array-index-of': loadUnicorn(prefer_array_index_of, 'unicorn/prefer-array-index-of'),
    'unicorn/prefer-blob-reading-methods': loadUnicorn(prefer_blob_reading_methods, 'unicorn/prefer-blob-reading-methods'),
    'unicorn/prefer-date-now': loadUnicorn(prefer_date_now, 'unicorn/prefer-date-now'),
    'unicorn/prefer-dom-node-dataset': loadUnicorn(prefer_dom_node_dataset, 'unicorn/prefer-dom-node-dataset'),
    'unicorn/prefer-math-trunc': loadUnicorn(prefer_math_trunc, 'unicorn/prefer-math-trunc'),
    'unicorn/prefer-modern-math-apis': loadUnicorn(prefer_modern_math_apis, 'unicorn/prefer-modern-math-apis'),
    'unicorn/number-literal-case': loadUnicorn(number_literal_case, 'unicorn/number-literal-case'),
    'unicorn/prefer-number-properties': loadUnicorn(prefer_number_properties, 'unicorn/prefer-number-properties'),
    'unicorn/prefer-reflect-apply': loadUnicorn(prefer_reflect_apply, 'unicorn/prefer-reflect-apply'),
    'unicorn/prefer-set-size': loadUnicorn(prefer_set_size, 'unicorn/prefer-set-size'),
    'unicorn/prefer-string-replace-all': loadUnicorn(prefer_string_replace_all, 'unicorn/prefer-string-replace-all'),
    'unicorn/prefer-string-slice': loadUnicorn(prefer_string_slice, 'unicorn/prefer-string-slice'),
    'unicorn/prefer-string-trim-start-end': loadUnicorn(prefer_string_trim_start_end, 'unicorn/prefer-string-trim-start-end'),
    'unicorn/no-unreadable-iife': loadUnicorn(no_unreadable_iife, 'unicorn/no-unreadable-iife'),
    'unicorn/throw-new-error': loadUnicorn(throw_new_error, 'unicorn/throw-new-error'),
    'unicorn/better-regex': loadUnicorn(better_regex, 'unicorn/better-regex'),
    'unicorn/escape-case': loadUnicorn(escape_case, 'unicorn/escape-case'),
    'unicorn/no-hex-escape': loadUnicorn(no_hex_escape, 'unicorn/no-hex-escape'),
    'unicorn/prefer-prototype-methods': loadUnicorn(prefer_prototype_methods, 'unicorn/prefer-prototype-methods'),
    'unicorn/relative-url-style': loadUnicorn(relative_url_style, 'unicorn/relative-url-style'),
    'unicorn/error-message': loadUnicorn(error_message, 'unicorn/error-message'),
    'unicorn/no-instanceof-array': loadUnicorn(no_instanceof_array, 'unicorn/no-instanceof-array'),
    'unicorn/prefer-type-error': loadUnicorn(prefer_type_error, 'unicorn/prefer-type-error'),

    // Require TS
    'string/no-unneeded-to-string': string$no_unneeded_to_string,
    // If you have a good reason to do this, please ignore this error and provide a comment about why this is type safe.
    'type/no-force-cast-via-top-type': type$no_force_cast_via_top_type,
    'type/no-wrapper-type-reference': type$no_wrapper_type_reference,
    'no-default-error': no_default_error
  }
};

function loadUnicorn(rule: any, ruleId: string): import('eslint').Rule.RuleModule {
  return {
    meta: {
      // If there is are, options add `[]` so ESLint can validate that no data is passed to the rule.
      // https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/require-meta-schema.md
      schema: [],
      ...rule.meta,
      docs: {
        ...rule.meta.docs,
        url: getDocumentationUrl(ruleId)
      }
    },
    create: reportProblems(rule.create)
  };
}

const isIterable = object => typeof object?.[Symbol.iterator] === 'function';

class FixAbortError extends Error { }
const fixOptions = {
  abort() {
    throw new FixAbortError('Fix aborted.');
  }
};

function wrapFixFunction(fix) {
  return fixer => {
    const result = fix(fixer, fixOptions);

    if (isIterable(result)) {
      try {
        return [...result];
      } catch (error) {
        if (error instanceof FixAbortError) {
          return;
        }

        /* c8 ignore next */
        throw error;
      }
    }

    return result;
  };
}

function reportListenerProblems(problems, context) {
  if (!problems) {
    return;
  }

  if (!isIterable(problems)) {
    problems = [problems];
  }

  for (const problem of problems) {
    if (problem.fix) {
      problem.fix = wrapFixFunction(problem.fix);
    }

    if (isIterable(problem.suggest)) {
      for (const suggest of problem.suggest) {
        if (suggest.fix) {
          suggest.fix = wrapFixFunction(suggest.fix);
        }

        suggest.data = {
          ...problem.data,
          ...suggest.data
        };
      }
    }

    context.report(problem);
  }
}

// `checkVueTemplate` function will wrap `create` function, there is no need to wrap twice
// const wrappedFunctions = new WeakSet();
function reportProblems(create) {
  // if (wrappedFunctions.has(create)) {
  //   return create;
  // }

  // wrappedFunctions.add(wrapped);

  return context => {
    const listeners = {};
    const addListener = (selector, listener) => {
      listeners[selector] ??= [];
      listeners[selector].push(listener);
    };

    const contextProxy = new Proxy(context, {
      get(target, property, receiver) {
        if (property === 'on') {
          return (selectorOrSelectors, listener) => {
            const selectors = Array.isArray(selectorOrSelectors) ? selectorOrSelectors : [selectorOrSelectors];
            for (const selector of selectors) {
              addListener(selector, listener);
            }
          };
        }

        if (property === 'onExit') {
          return (selectorOrSelectors, listener) => {
            const selectors = Array.isArray(selectorOrSelectors) ? selectorOrSelectors : [selectorOrSelectors];
            for (const selector of selectors) {
              addListener(`${selector}:exit`, listener);
            }
          };
        }

        return Reflect.get(target, property, receiver);
      }
    });

    for (const [selector, listener] of Object.entries(create(contextProxy) ?? {})) {
      addListener(selector, listener);
    }

    return Object.fromEntries(
      Object.entries(listeners)
        .map(([selector, listeners]) => [
          selector,
          // Listener arguments can be `codePath, node` or `node`
          (...listenerArguments) => {
            for (const listener of listeners) {
              reportListenerProblems(listener(...listenerArguments), context);
            }
          }
        ])
    );
  };
}
