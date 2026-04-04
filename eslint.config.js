import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		name: 'react-app-purple',
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite
		],
		plugins: {
			react: reactPlugin,
			prettier: prettier
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'never'],
			quotes: ['error', 'single'],
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'no-trailing-spaces': 'error',
			'react/display-name': 'off',
			'unused-imports/no-unused-imports': 'off',
			'@typescript-eslint/no-unused-vars': 0,
			'react/prop-types': [0],
			'react/react-in-jsx-scope': 0,
			'prettier/prettier': 'error'
		}
	}
]);
