// themes.ts
import { BasicTheme } from 'styled-components';

const defaultSpacing = '0.5rem';

const basicTheme: BasicTheme = {
	borderRadius: '0.5rem',
	spacing: defaultSpacing,
	contentsMaxWith: '1920px',

	headerHeight: `3rem * 3`,

	colors: {
		main: '#2962FF',
		secondary: '#affd1c',
		warning: 'orange',

		white: '#FEFEFE',
		black: '#141414',
		grey: '#626262',
		greyLight: '#9d9d9d',
	},
};

export { basicTheme };
