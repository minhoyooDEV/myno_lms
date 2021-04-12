// courses/[id].tsx

import { useState } from 'react';
import styled from 'styled-components';
import withSession from '../../lib/session';
import { CourseDetailContainer } from '../../components/course/course-detail-container';
import LessonList from '../../components/course/course-lesson-list';
import LessonListItem from '../../components/course/course-lesson-list-item';
import { Course, CourseContents } from '../../model/course';
import { Comments } from '../../model/comments';
import { useStore } from '../../stores';
import CourseDetailContents from '../../components/course/course-detail-contents';
import CommentsInput from '../../components/course/comments-input';
import CommentsList from '../../components/course/comments-list';
import { Observer } from 'mobx-react-lite';

interface CoursePageProp {
	courseStore: {
		course: Course;
		contentsList: CourseContents[];
		commentsList: Comments[];
	};
}

const LessonContents = styled.div`
	flex: 1;
	overflow-y: scroll;
	padding: ${({ theme }) => theme.spacing};
`;

function CoursePage({ courseStore }: CoursePageProp) {
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
		if (!comments) {
			window.alert('내용이 없습니다.');
		}
		commentsStore.createCommentsByContentsId(course.id, comments);
	};
	const handleListItem = (idx: number) => {
		setContentsIndex(idx);
	};

	return (
		<CourseDetailContainer>
			<LessonList>
				{contentsList.map(({ id }, idx) => (
					<LessonListItem key={id} onClick={() => handleListItem(idx)}>
						<a>
							<div>Lesson #{id}</div>
						</a>
					</LessonListItem>
				))}
			</LessonList>
			<LessonContents>
				<CourseDetailContents
					title={course.title}
					lessonNumber={contentsIndex + 1}
					markdown={contentsList[contentsIndex]?.body || ''}
				/>
				<hr />
				<CommentsInput
					text={comments}
					onTextChange={e => setComments(e.target.value)}
					onSubmit={onSubmit}
				/>
				<CommentsList data={commentsList || []} />
			</LessonContents>
		</CourseDetailContainer>
	);
}

export default CoursePage;

export const getServerSideProps = withSession(async ({ res, req, params }) => {
	const user = req.session.get('user');

	if (!user) {
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

	// TODO:: typing
	const [course, contentsList, commentsList] = await Promise.all(responses.map(res => res.json()));

	return {
		props: {
			courseStore: {
				course,
				contentsList,
				commentsList: (commentsList as Comments[]).sort((a, b) => b.id - a.id),
			},
			commentsStore: {
				contentsIdWithCommentsList: [course.id, commentsList],
			},
		},
	};
});
