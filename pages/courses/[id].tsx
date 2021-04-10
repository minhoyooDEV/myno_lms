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
import { Comments } from '../../model/comments';
import { useStore } from '../../stores';
import { Col, Row } from '../../components/base/grid';
import { Observer } from 'mobx-react-lite';

interface CoursePageProp {
	courseStore: {
		course: Course;
		contentsList: CourseContents[];
		commentsList: Comments[];
	};
}

const LessonContents = styled.article`
	flex: 1;
	overflow-y: scroll;
`;

function CoursePage({ courseStore }: CoursePageProp) {
	// const router = useRouter();

	const { commentsStore } = useStore();

	if (!courseStore) {
		return <div></div>;
	}

	const { commentsListByContentsId } = commentsStore;
	const { course, contentsList } = courseStore;
	const commentsList = commentsListByContentsId.get(course.id);

	const [contentsIndex, setContentsIndex] = useState(0);
	const [comments, setComments] = useState('');
	const onSubmit = () => {
		commentsStore.createCommentsByContentsId(course.id, comments);
	};
	const handleListItem = (idx: number) => {
		setContentsIndex(idx);
	};
	return (
		<CourseDetailContainer>
			<div style={{ width: 200 }}>
				<LessonList>
					{contentsList.map(({ id }, idx) => (
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
					<ReactMarkdown children={contentsList[contentsIndex]?.body || ''} />
				</div>
				<div>
					<input value={comments} onChange={e => setComments(e.target.value)} />
					<button onClick={onSubmit}>제출</button>
				</div>
				<ul>
					<Observer>
						{() => (
							<>
								{commentsList?.map(({ id, body, createdAt, userId }) => (
									<li key={id}>
										<Row>
											<Col>
												<div>{userId}</div>
												<div>생성일: {createdAt}</div>
											</Col>
											<Col>{body}</Col>
										</Row>
									</li>
								))}
							</>
						)}
					</Observer>
				</ul>
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
		fetch(`${process.env.API_HOST}/contents/${params.id}/comments`, {
			headers: { Authorization: accessToken },
		}),
	]);

	const [course, contentsList, commentsList] = await Promise.all(responses.map(res => res.json()));

	console.log(commentsList);
	return {
		props: {
			courseStore: {
				course,
				contentsList,
				commentsList: commentsList.sort((a, b) => b.id - a.id),
			},
			commentsStore: {
				contentsIdWithCommentsList: [course.id, commentsList],
			},
		},
	};
});
