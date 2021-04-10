/* eslint-disable react/no-children-prop */
// courses/[id].tsx

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { MouseEventHandler, MouseEvent, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import withSession from '../../lib/session';
import { CourseDetailContainer } from '../../components/course/course-detail-container';
import LessonList from '../../components/course/course-lesson-list';
import LessonListItem from '../../components/course/course-lesson-list-item';
import { Course, CourseContents } from '../../model/course';

interface CoursePageProp {
	courseStore: {
		course: Course;
		courseContents: CourseContents[];
	};
}

const LessonContents = styled.article`
	flex: 1;
`;

function CoursePage({ courseStore }: CoursePageProp) {
	// const router = useRouter();

	if (!courseStore) {
		return <div></div>;
	}

	const { course, courseContents } = courseStore;

	const [contentsIndex, setContentsIndex] = useState(0);

	const handleListItem = (idx: number) => {
		setContentsIndex(idx);
	};
	return (
		<CourseDetailContainer>
			<div style={{ width: 200 }}>
				<LessonList>
					{courseContents.map(({ id }, idx) => (
						<LessonListItem key={id} onClick={() => handleListItem(idx)}>
							<a>
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
}

export default CoursePage;

export const getServerSideProps = withSession(async ({ res, req, params }) => {
	const user = req.session.get('user');

	if (user === undefined) {
		res.setHeader('location', '/members/sign-in');
		res.statusCode = 302;
		return { props: {} };
	}

	const accessToken = req.session.get('accessToken');

	const responses = await Promise.all([
		fetch(`${process.env.API_HOST}/courses/${params.id}`),
		fetch(`${process.env.API_HOST}/courses/${params.id}/contents`, {
			headers: { Authorization: accessToken },
		}),
	]);

	const [course, courseContents] = await Promise.all(responses.map(res => res.json()));

	return { props: { courseStore: { course, courseContents } } };
});
