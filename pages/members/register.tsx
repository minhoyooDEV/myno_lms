// register.tsx
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import MemberInput from '../../components/member/member-input';
import { Container } from '../../components/base/container';
import { useStore } from '../../stores';
import withSession from '../../lib/session';
import { useRouter } from 'next/router';
import { BasicError } from '../../interface/Error';
import ServerErrorMessage from '../../components/member/server-error-message';

type Inputs = {
	email: string;
	password: string;
	confirmPassword: string;

	username: string;
	tel: string;
};
const schema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
	confirmPassword: yup.string().required(),
	username: yup.string().required(),
	tel: yup.string().required(),
});

const RegisterPage = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema) });

	const { authStore } = useStore();
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (data: Inputs) => {
		try {
			await authStore.signUp(data);
			router.replace('/');
		} catch (_error) {
			const error: BasicError = _error;
			console.error(error);
			setErrorMessage(error.errorMessage);
		}
	};

	return (
		<Container>
			<h1>회원가입</h1>
			<section>
				<ServerErrorMessage> {errorMessage}</ServerErrorMessage>
				<form onSubmit={handleSubmit(onSubmit)}>
					<MemberInput>
						<label htmlFor="email">이메일</label>
						<input {...register('email')} id="email" autoFocus />
						{errors.email && <p>{errors.email.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="password">비밀번호</label>
						<input {...register('password')} id="password" type="password"></input>
						{errors.password && <p>{errors.password.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="confirmPassword">비밀번호 확인</label>
						<input {...register('confirmPassword')} id="confirmPassword" type="password"></input>
						{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
					</MemberInput>
					<hr />
					<MemberInput>
						<label htmlFor="username">유저 이름</label>
						<input {...register('username', { required: true })} id="username"></input>
						{errors.username && <p>{errors.username.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="tel">연락처</label>
						<input {...register('tel', { required: true })} id="tel"></input>
						{errors.tel && <p>{errors.tel.message}</p>}
					</MemberInput>
					<button type="submit"> 전송</button>
				</form>
			</section>
		</Container>
	);
};

export default RegisterPage;

export const getServerSideProps = withSession(async ({ res, req }) => {
	const user = req.session.get('user');

	if (user) {
		res.setHeader('location', '/');
		res.statusCode = 302;
	}

	return { props: {} };
});
