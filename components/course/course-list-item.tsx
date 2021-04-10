import Link from 'next/link';
import styled from 'styled-components';
import { Course } from '../../model/course';

const Li = styled.li`
	border-radius: ${props => props.theme.borderRadius};
	padding: ${props => props.theme.spacing};
	border: 1px solid;
	img {
		border-radius: ${props => props.theme.borderRadius};
	}

	&:hover {
		border-color: ${props => props.theme.colors.main};

		//TODO:: be animate
		box-shadow: 4px 9px 12px -2px rgba(0, 0, 0, 0.52);
	}
`;
interface CourseListItemProps {
	data: Course;
}
const CourseListItem = ({ data }: CourseListItemProps) => {
	return (
		<Li>
			<div>
				<Link href={`/courses/${data.id}`}>
					<strong>{data.title}</strong>
				</Link>
			</div>
			<p>{data.description}</p>
			<img src={data.thumbnailURL} width="100%" />
		</Li>
	);
};

export default CourseListItem;
