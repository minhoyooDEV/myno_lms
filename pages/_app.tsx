import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../configs/themes';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={basicTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
