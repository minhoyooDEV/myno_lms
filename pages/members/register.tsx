// register.tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import MemberInput from '../../components/member/member-input';
import { Container } from '../../components/base/container';

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
					<MemberInput>
						<label htmlFor="email">이메일</label>
						<input {...register('email')} id="email" autoFocus />
						{errors.email && <p>{errors.email.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="password">비밀번호</label>
						<input {...register('password')} id="password"></input>
						{errors.password && <p>{errors.password.message}</p>}
					</MemberInput>
					<MemberInput>
						<label htmlFor="confirmPassword">비밀번호 확인</label>
						<input {...register('confirmPassword')} id="confirmPassword"></input>
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
