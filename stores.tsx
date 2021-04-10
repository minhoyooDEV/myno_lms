import React, { useMemo } from 'react';
import { createCourseStore, TCourseStoreState } from './model/course';
import { enableStaticRendering } from 'mobx-react';
import { createAuthStore, TAuthStoreState } from './model/auth';
// https://github.com/vercel/next.js/blob/canary/examples/with-mobx/store.js

const isServer = typeof window === 'undefined';
// ssr issuese
enableStaticRendering(isServer);

type initializeStoreProps = {
	courseStore: TCourseStoreState;
	authStore: TAuthStoreState;
};

const makeStore = () => ({
	courseStore: createCourseStore(),
	authStore: createAuthStore(),
});

type TStore = ReturnType<typeof makeStore>;

let store: TStore;

function initializeStore(initialData: initializeStoreProps) {
	const _store: TStore = store ?? makeStore();

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
	if (initialData) {
		_store.authStore.hydrate(initialData.authStore);
		_store.courseStore.hydrate(initialData.courseStore);
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
}

export const storeContext = React.createContext<TStore | null>(null);
interface StoreProviderProps {
	children: React.ReactNode;
	store: TStore | null;
}
export const StoreProvider = ({ store, children }: StoreProviderProps) => (
	<storeContext.Provider value={store}>{children}</storeContext.Provider>
);

export const useStore = () => {
	return React.useContext(storeContext) as TStore;
};

export const useInitializeStore = (initialStore: initializeStoreProps) => {
	const store = useMemo(() => initializeStore(initialStore), [initialStore]);
	return store;
};
