import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import { basicTheme } from '../configs/themes';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={basicTheme}>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
