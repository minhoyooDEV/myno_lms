import { Observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Container } from '../../components/base/container';
import withSession from '../../lib/session';
import { useStore } from '../../stores';

const SimpleText = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	label {
		font-size: 1.5rem;
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}
	div {
	}
`;

interface MypagePage {}
const MypagePage = ({}: MypagePage) => {
	const { authStore } = useStore();
	const user = authStore.user;

	if (!user) {
		return <div></div>;
	}

	return (
		<Container>
			<h1>내 정보</h1>
			<section>
				<SimpleText>
					<label>email</label>
					<div>{user.email}</div>
				</SimpleText>
				<SimpleText>
					<label>username</label>
					<div>{user.username}</div>
				</SimpleText>
				<SimpleText>
					<label>tel</label>
					<div>{user.tel}</div>
				</SimpleText>
			</section>
		</Container>
	);
};

export default MypagePage;

export const getServerSideProps = withSession(async ({ res, req }) => {
	const user = req.session.get('user');

	if (user === undefined) {
		res.setHeader('location', '/members/sign-in');
		res.statusCode = 302;
		return { props: {} };
	}

	return { props: { user } };
});
