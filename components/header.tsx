import styled from 'styled-components';
import { Container } from './base/container';

const HeaderWrap = styled.header`
	z-index: ${({ theme }) => theme.zIndex.header};
	position: fixed;
	left: 0;
	right: 0;
	height: ${({ theme }) => theme.headerHeight};
	padding: ${({ theme }) => theme.spacing};
	background-color: ${({ theme }) => theme.colors.main};
`;

const HeaderContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	background-color: inherit;
	color: ${({ theme }) => theme.colors.white};
`;

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
	return (
		<HeaderWrap>
			<HeaderContainer>
				{/* left */}
				<div>
					<b>LOGO</b>
				</div>

				{/* right */}
				<div>
					<div>sign in</div>
					<div>register</div>
				</div>
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
