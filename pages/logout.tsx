import { useRouter } from 'next/router';
import { useEffect } from 'react';
import withSession from '../lib/session';
import { useStore } from '../stores';

const LogoutPage = () => {
	const { authStore } = useStore();
	const router = useRouter();
	useEffect(() => {
		authStore.logout();
		router.push('/');
	}, []);
	return <div>logout...</div>;
};

export default LogoutPage;
export const getServerSideProps = withSession(async ({ res, req }) => {
	// Get the user's session based on the request
	const user = req.session.get('user');

	console.log(req.session);
	console.log(user);
	if (user) {
		req.session.destroy();
	}

	return {
		props: { user: 'qwe' },
	};
});
