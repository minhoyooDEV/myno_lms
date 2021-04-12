/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';

interface CourseDetailContentsProps {
	title: string;
	lessonNumber: number;
	markdown: string;
}
const CourseDetailContents = ({ title, lessonNumber, markdown }: CourseDetailContentsProps) => {
	return (
		<article>
			<div>
				<strong>{title}</strong>
			</div>
			<div>Lesson: #{lessonNumber}</div>
			<ReactMarkdown children={markdown} />
		</article>
	);
};

export default CourseDetailContents;
