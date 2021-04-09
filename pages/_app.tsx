import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../configs/themes';
import { StoreProvider, useInitializeStore } from '../stores';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	// pageProps.init;
	const store = useInitializeStore({ courseStore: { data: new Map(), list: [] } });

	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={basicTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
