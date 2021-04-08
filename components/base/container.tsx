import styled from 'styled-components';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: ${({ theme }) => `calc(${theme.spacing} * 2)`};
	padding-right: ${({ theme }) => `calc(${theme.spacing} * 2)`};
	max-width: ${({ theme }) => theme.contentsMaxWith};
	background-color: ${({ theme }) => theme.colors.white};
`;
