import styled from 'styled-components';
import { Course } from '../../model/course';

const Li = styled.li`
	border-radius: ${props => props.theme.borderRadius};
	padding: ${props => props.theme.spacing};
	border: 1px solid;
`;
interface CourseListItemProps {
	data: Course;
}
const CourseListItem = ({ data }: CourseListItemProps) => {
	return (
		<Li>
			<div>
				<strong>{data.title}</strong>
			</div>
			<p>{data.description}</p>
			<img src={data.thumbnailURL} />
		</Li>
	);
};

export default CourseListItem;
