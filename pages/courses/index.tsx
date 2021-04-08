// courses/index.tsx
import { NextPageContext } from 'next';
import styled from 'styled-components';
import { Container } from '../../components/container';
import CourseListItem from '../../components/course/course-list-item';
import { Course } from '../../model/course';
import mediaquery from '../../utiles/mediaquery';
import { CoursesMockResponse } from '../../__mock_data';

interface CoursesProp {
	data: Course[];
}
const Ul = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	${mediaquery.md`
		grid-template-columns: 1fr 1fr 1fr;
`}
`;

const Courses = ({ data }: CoursesProp) => {
	return (
		<Container>
			<Ul>
				{data.map(data => (
					<CourseListItem key={data.id} data={data}></CourseListItem>
				))}
			</Ul>
		</Container>
	);
};

export default Courses;

Courses.getInitialProps = async ({ req }: NextPageContext) => {
	// http://lms-assignment.codestates.com/courses

	const data = CoursesMockResponse;
	return { data };
};
