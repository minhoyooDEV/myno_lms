import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Main } from '../components/base/main';
import Header from '../components/header';
import { basicTheme } from '../configs/themes';
import { StoreProvider, useInitializeStore } from '../stores';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	// pageProps.init;
	console.log('@@@@ APP @@@@@');
	console.log({ pageProps });
	const initialProp = {
		courseStore: pageProps.courseStore,
	};
	const store = useInitializeStore(initialProp);

	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={basicTheme}>
				<Header />
				<Main>
					<Component {...pageProps} />
				</Main>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
