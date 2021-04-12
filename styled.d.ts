// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends BasicTheme {
		borderRadius: string;
		spacing: string;
		contentsMaxWith: string;

		headerHeight: string;
		zIndex: {
			header: 1000;
		};
		colors: {
			main: string;
			secondary: string;
			warning: string;

			white: string;
			black: string;
			grey: string;
			greyLight: string;

			bodyBackground: string;
		};
	}
}
