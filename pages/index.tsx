import Head from 'next/head';
import Link from 'next/link';

import { useRouter } from 'next/router';
export default function Home() {
	const router = useRouter();

	// browser side redirect
	if (typeof window !== 'undefined') {
		router.push('/courses');
	}

	return (
		<>
			<Head>
				<title>Myno LMS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
		</>
	);
}
