import styled from 'styled-components';

const LessonList = styled.ul`
	width: 200px;
	background: white;
	height: 100%;
	padding: ${({ theme }) => theme.spacing};
`;

export default LessonList;
