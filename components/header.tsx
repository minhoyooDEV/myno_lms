import styled from 'styled-components';
import mediaquery from '../utiles/mediaquery';
import { Container } from './container';

const HeaderWrap = styled.header`
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
