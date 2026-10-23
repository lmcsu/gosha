import eslint from '@eslint/js';
import eslintTs from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { defineFlatConfig } from 'eslint-define-config';
import globals from 'globals';

export default defineFlatConfig([
    eslint.configs.recommended,
    ...eslintTs.configs.recommended,
    stylistic.configs['recommended-flat'],
    {
        files: [
            '**/*',
        ],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-alert': ['error'],
            'no-debugger': 'warn',
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-inner-declarations': 'error',
            'no-unused-vars': ['warn'],
            'curly': ['error', 'all'],
            'no-var': ['error'],
            'prefer-arrow-callback': 'error',

            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/comma-spacing': ['error'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
            '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
            '@stylistic/indent-binary-ops': ['error', 4],
            '@stylistic/key-spacing': ['error'],
            '@stylistic/keyword-spacing': ['error'],
            '@stylistic/lines-between-class-members': ['error', 'always'],
            '@stylistic/max-len': ['error', 132],
            '@stylistic/max-statements-per-line': ['error', { max: 1 }],
            '@stylistic/no-multi-spaces': ['error'],
            '@stylistic/no-multiple-empty-lines': ['error', {
                max: 1,
                maxEOF: 0,
                maxBOF: 0,
            }],
            '@stylistic/operator-linebreak': ['error', 'after'],
            '@stylistic/padded-blocks': ['error', 'never', {
                allowSingleLineBlocks: false,
            }],
            '@stylistic/quote-props': [
                'error',
                'consistent-as-needed',
            ],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                },
            ],
            '@stylistic/semi-spacing': ['error'],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/space-before-function-paren': ['error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            }],
            '@stylistic/space-infix-ops': ['error'],
            '@stylistic/space-unary-ops': ['error'],
            '@stylistic/spaced-comment': ['error', 'always', {
                block: {
                    balanced: true,
                },
            }],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            }],
            '@stylistic/comma-dangle': ['error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
                enums: 'always-multiline',
                generics: 'always-multiline',
                tuples: 'always-multiline',
            }],
            '@stylistic/semi': ['error', 'always'],

            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-explicit-any': ['error'],
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/explicit-member-accessibility': ['error'],
        },
    },
]);
