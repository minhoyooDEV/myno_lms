// courses/index.tsx
import { NextPageContext } from 'next';
import { Course } from '../../model/course';
import { CoursesMockResponse } from '../../__mock_data';

interface CoursesProp {
	data: Course[];
}
const Courses = ({ data }: CoursesProp) => {
	return <div>courses</div>;
};

export default Courses;

Courses.getInitialProps = async ({ req }: NextPageContext) => {
	// http://lms-assignment.codestates.com/courses

	const data = CoursesMockResponse;
	return { data };
};
