import styled from 'styled-components';

const LessonListItem = styled.li`
	padding: ${({ theme }) => theme.spacing};
	border-radius: ${({ theme }) => theme.borderRadius};
	border: 0.01rem solid ${({ theme }) => theme.colors.greyLight};
	& + li {
		margin-top: ${({ theme }) => theme.spacing};
	}
	&:hover {
		font-weight: bold;
		border: 0.01rem solid ${({ theme }) => theme.colors.main};
	}
`;

export default LessonListItem;
