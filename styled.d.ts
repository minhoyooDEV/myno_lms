// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends BasicTheme {
		borderRadius: string;
		spacing: string;
		contentsMaxWith: string;
		sizes: {
			mobile: 320;
			tablet: 768;
			laptop: 1024;
			tesktop: 2560;
		};
		colors: {
			main: string;
			secondary: string;
		};
	}
}
