import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../stores';

// eslint-disable-next-line react/display-name
const AuthCheckWrapper = ({ children }: any) => {
	const { authStore } = useStore();
	const router = useRouter();

	const asPath = router.asPath;
	useEffect(() => {
		if (!authStore.isLoginned) {
			authStore.me();
		}
	}, []);

	useEffect(() => {
		if (authStore.isLoginned && ['/members/register', '/members/sign-in'].includes(asPath)) {
			router.replace('/');
		}
	}, [router, asPath]);

	return <>{children}</>;
};

export default AuthCheckWrapper;
