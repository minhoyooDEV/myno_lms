// sign-in.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from '../../components/base/container';
import MemberInput from '../../components/member/member-input';
import { useStore } from '../../stores';
import { LoginReqestParam } from '../../model/auth';

type Inputs = {
	email: string;
	password: string;
};
const schema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

const SignInPage = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema) });

	const { authStore } = useStore();

	const [temp, setTemp] = useState({});

	const onSubmit = async (data: LoginReqestParam) => {
		try {
			await authStore.login(data);
			router.replace('/');
		} catch (error) {
			setTemp(error);
		}

		// TODO:: more convinence
	};

	return (
		<Container>
			<h1>로그인</h1>
			<section>
				{JSON.stringify(temp)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<MemberInput>
						<label htmlFor="email">이메일</label>
						<input defaultValue="user1@gmail.com" {...register('email')} id="email" autoFocus />
						{errors.email && <p>{errors.email.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="password">비밀번호</label>
						<input
							defaultValue="password1"
							type="password"
							{...register('password')}
							id="password"
							autoFocus
						/>
						{errors.password && <p>{errors.password.message}</p>}
					</MemberInput>
					<button type="submit">버튼</button>
				</form>
			</section>
		</Container>
	);
};

export default SignInPage;
