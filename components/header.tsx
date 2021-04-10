import { Observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '../stores';
import { Container } from './base/container';
import { Col, Row } from './base/grid';

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
	height: 100%;
	justify-content: space-between;
	align-items: center;
	background-color: inherit;
	color: ${({ theme }) => theme.colors.white};
`;

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
	const { authStore } = useStore();

	return (
		<HeaderWrap>
			<HeaderContainer>
				{/* left */}
				<div>
					<Link href="/">
						<a>
							<b>HOME</b>
						</a>
					</Link>
				</div>

				{/* right */}
				<Observer>
					{() =>
						authStore.isLoginned ? (
							<Row>
								<Col>
									<Link href="/members/my-page">
										<a>
											<span>{authStore.user?.username}님 오늘도 화이팅</span>
										</a>
									</Link>
								</Col>
								<Col>
									<Link href="/logout">logout</Link>
								</Col>
							</Row>
						) : (
							<Row>
								<Col>
									<Link href="/members/sign-in">sign in</Link>
								</Col>
								<Col>
									<Link href="/members/register">register</Link>
								</Col>
							</Row>
						)
					}
				</Observer>
			</HeaderContainer>
		</HeaderWrap>
	);
};

export default Header;
