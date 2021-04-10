// themes.ts
import { DefaultTheme as BasicTheme } from 'styled-components';

const defaultSpacing = '0.5rem';

const basicTheme: BasicTheme = {
	borderRadius: '0.5rem',
	spacing: defaultSpacing,
	contentsMaxWith: '1920px',

	sizes: {
		minMobile: 320,
		mobile: 576,
		tablet: 768,
		laptop: 1024,
		tesktop: 2560,
	},
	headerHeight: `3rem`,
	zIndex: {
		header: 1000,
	},
	colors: {
		main: '#2962FF',
		secondary: '#affd1c',
		warning: 'orange',

		white: '#FEFEFE',
		black: '#141414',
		grey: '#626262',
		greyLight: '#9d9d9d',

		bodyBackground: '#ebebeb',
	},
};

export { basicTheme };
