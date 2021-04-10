import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Main } from '../components/base/main';
import Header from '../components/header';
import { basicTheme } from '../configs/themes';
import AuthCheckWrapper from '../components/auth-check-wrapper';
import { StoreProvider, useInitializeStore } from '../stores';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	// pageProps.init;
	// console.log('@@@@ APP @@@@@');
	// console.log({ pageProps });

	const initialProp = {
		authStore: pageProps?.authStore,
		courseStore: pageProps?.courseStore,
	};
	const store = useInitializeStore(initialProp);

	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={basicTheme}>
				<AuthCheckWrapper>
					<Header />
					<Main>
						<Component {...pageProps} />
					</Main>
				</AuthCheckWrapper>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
