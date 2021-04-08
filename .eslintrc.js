export default {
	parser: '@typescript-eslint/parser',

	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		// eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		// eslint - plugin - prettier,
	],
	parserOptions: {
		ecmaVersion: 2018, // 최신 문법 지원
		sourceType: 'module', // 모듈 시스템 사용시
		ecmaFeatures: {
			jsx: true, // 리액트의 JSX 파싱을 위해서
		},
	},
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
