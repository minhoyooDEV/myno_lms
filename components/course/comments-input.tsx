import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';

const CommentInput = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	/* height: 2rem; */
	align-items: center;
	textarea {
		flex: 1;
		resize: none;
		/* height: 100%; */
	}
	button {
		margin-left: 1rem;
		height: 2rem;
		width: 5rem;
	}
`;

interface CommentsInputProps {
	text: string;
	onTextChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
	onSubmit: MouseEventHandler<HTMLButtonElement> | undefined;
}
const CommentsInput = ({ text, onTextChange, onSubmit }: CommentsInputProps) => (
	<CommentInput>
		<textarea rows={3} value={text} onChange={onTextChange} />
		<button onClick={onSubmit}>제출</button>
	</CommentInput>
);

export default CommentsInput;
