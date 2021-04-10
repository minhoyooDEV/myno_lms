import { useEffect } from 'react';
import { useStore } from '../stores';

// eslint-disable-next-line react/display-name
const AuthCheckWrapper = ({ children }: any) => {
	const { authStore } = useStore();
	useEffect(() => {
		if (!authStore.isLoginned) {
			authStore.me();
		}
	}, []);

	return <>{children}</>;
};

export default AuthCheckWrapper;
