// sign-in.tsx
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
			<h1>로그인</h1>
		</Container>
	);
};

export default SignInPage;
