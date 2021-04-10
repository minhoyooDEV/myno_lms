/* eslint-disable react/no-children-prop */
// courses/[id].tsx

import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { CourseDetailContainer } from '../../components/course/course-detail-container';
import LessonList from '../../components/course/course-lesson-list';
import LessonListItem from '../../components/course/course-lesson-list-item';
import { Course, CourseContents } from '../../model/course';
import { CourseMockResponse, CourseContentsMockResponse } from '../../__mock_data';

interface CoursePageProp {
	data: {
		course: Course;
		courseContents: CourseContents[];
	};
}

const LessonContents = styled.article`
	flex: 1;
`;

const CoursePage = ({ data }: CoursePageProp) => {
	const router = useRouter();
	const { id } = router.query;
	const { course, courseContents } = data;

	const [contentsIndex, setContentsIndex] = useState(0);

	return (
		<CourseDetailContainer>
			<div style={{ width: 200 }}>
				<LessonList>
					{courseContents.map(({ id, body, courseId, order }) => (
						<LessonListItem key={id}>
							<a href="#">
								<div>Lesson #{id}</div>
							</a>
						</LessonListItem>
					))}
				</LessonList>
			</div>
			<LessonContents>
				<div>{course.title}</div>
				<div>Lesson: #{contentsIndex + 1}</div>
				<div>
					<ReactMarkdown children={courseContents[contentsIndex]?.body || ''} />
				</div>
			</LessonContents>
		</CourseDetailContainer>
	);
};

export default CoursePage;

CoursePage.getInitialProps = async () => {
	// http://lms-assignment.codestates.com/courses/[id]
	// http://lms-assignment.codestates.com/courses/[id]/contents

	const data = {
		course: CourseMockResponse,
		courseContents: CourseContentsMockResponse.sort((a, b) => a.order - b.order),
	};

	return { data };
};
