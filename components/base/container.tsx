import styled from 'styled-components';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: ${({ theme }) => `calc(${theme.spacing} * 4)`};
	padding-right: ${({ theme }) => `calc(${theme.spacing} * 4)`};
	max-width: ${({ theme }) => theme.contentsMaxWith};
	background-color: ${({ theme }) => theme.colors.white};
`;
