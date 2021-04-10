// sign-in.tsx
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from '../../components/base/container';

//TODO babel class matching issues
const FormInput = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	label {
		font-size: 1.5rem;
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}
	input {
		border: 0.125rem solid ${({ theme }) => theme.colors.grey};
		border-radius: ${({ theme }) => theme.borderRadius};
		padding: ${({ theme }) => theme.spacing};
		&:invalid {
			border-color: red;
		}
		&:focus,
		&:hover {
			outline: 0;
			box-shadow: 0 0 0.25rem 0.125rem #2962ff;
		}
		&:valid {
			border-color: ${({ theme }) => theme.colors.main};
		}
	}
	p {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}
`;

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

const SignInPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema) });

	const onSubmit = (data: Inputs) => {
		console.log(data);
	};

	return (
		<Container>
			<h1>회원가입</h1>

			<section>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInput>
						<label htmlFor="email">이메일</label>
						<input {...register('email')} id="email" autoFocus />
						{errors.email && <p>{errors.email.message}</p>}
					</FormInput>
					<FormInput>
						<label htmlFor="password">비밀번호</label>
						<input {...register('password')} id="password"></input>
						{errors.password && <p>{errors.password.message}</p>}
					</FormInput>
					<FormInput>
						<label htmlFor="confirmPassword">비밀번호 확인</label>
						<input {...register('confirmPassword')} id="confirmPassword"></input>
						{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
					</FormInput>
					<hr />
					<FormInput>
						<label htmlFor="username">유저 이름</label>
						<input {...register('username', { required: true })} id="username"></input>
						{errors.username && <p>{errors.username.message}</p>}
					</FormInput>
					<FormInput>
						<label htmlFor="tel">연락처</label>
						<input {...register('tel', { required: true })} id="tel"></input>
						{errors.tel && <p>{errors.tel.message}</p>}
					</FormInput>
					<button type="submit"> 전송</button>
				</form>
			</section>
		</Container>
	);
};

export default SignInPage;
