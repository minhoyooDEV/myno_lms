import styled from 'styled-components';

export const Main = styled.main`
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;
	padding-top: ${({ theme }) => theme.headerHeight};
	background-color: ${({ theme }) => theme.colors.bodyBackground};
`;
