import styled from 'styled-components';

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

export default FormInput;
