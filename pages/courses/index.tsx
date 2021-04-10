// courses/index.tsx
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { Container } from '../../components/base/container';
import CourseListItem from '../../components/course/course-list-item';
import withSession from '../../lib/session';
import { Course } from '../../model/course';
import mediaquery from '../../utiles/mediaquery';
interface CoursesPageProps {
	courseStore: {
		list: Course[];
	};
}

const Ul = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1rem;
	${mediaquery.xs`
		grid-template-columns: 1fr 1fr;
	`}
	${mediaquery.md`
		grid-template-columns: 1fr 1fr 1fr;
	`}
`;

const CoursesPage = (props: CoursesPageProps) => {
	const courses = props.courseStore.list;
	return (
		<Container>
			<h1>코스 목록</h1>
			<Ul>
				{courses.map(data => (
					<CourseListItem key={data.id} data={data}></CourseListItem>
				))}
			</Ul>
		</Container>
	);
};

export default CoursesPage;

export const getServerSideProps: GetServerSideProps<CoursesPageProps> = withSession(
	async ({ req }) => {
		console.log(req.session.get('user'));
		const res = await fetch(process.env.API_HOST + '/courses');
		const courses = await res.json();
		return {
			props: { courseStore: { list: courses } },
		};
	},
);
