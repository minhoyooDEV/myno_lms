import Head from 'next/head';
import Link from 'next/link';
import { Main } from '../components/base/main';
import Header from '../components/header';

export default function Home() {
	return (
		<>
			<Header />
			<Main>
				<Head>
					<title>Myno LMS</title>
					<link rel="icon" href="/favicon.ico" />
					<ul>
						<li>
							<Link href="/members/sign-in">sign-in</Link>
						</li>
						<li>
							<Link href="/members/register">register</Link>
						</li>
						<li>
							<Link href="/courses">courses</Link>
						</li>
						<li>
							<Link href="/courses/1">course id 1</Link>
						</li>
					</ul>
				</Head>
			</Main>
		</>
	);
}
