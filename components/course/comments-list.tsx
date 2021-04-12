import { Observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { simpleTime } from '../../configs/moment';
import { Comments } from '../../model/comments';
import { Col, Row } from '../base/grid';

const CommentsWrap = styled.ul``;
const CommentsLi = styled.li`
	border: 1px solid grey;
	border-radius: 0.5rem;
	& + & {
		margin-top: 0.5rem;
		border-top: 1px solid grey;
	}

	p {
		margin: 0;
		width: 100%;
		/* padding-left: 0.5rem; */
	}
	padding: 0.5rem;
`;
const CommentsLiHead = styled(Row)`
	/* padding: 0.5rem; */
	justify-content: space-between;
`;

interface CommentsListProps {
	data: Comments[];
}
const CommentsList = ({ data }: CommentsListProps) => (
	<CommentsWrap>
		<Observer>
			{() => (
				<>
					{data.length ? (
						data.map(({ id, userId, createdAt, body }) => (
							<CommentsLi key={id}>
								<CommentsLiHead>
									<Col>
										<b>userId: </b> {userId}
									</Col>
									<Col>
										<b>createAt: </b>
										{simpleTime(createdAt)}
									</Col>
								</CommentsLiHead>
								<hr />
								<Row>
									<p>
										{body.split('\n').map((text, i) => (
											<span key={i}>
												{text}
												<br />
											</span>
										))}
									</p>
								</Row>
							</CommentsLi>
						))
					) : (
						<CommentsLi>댓글이 없습니다.</CommentsLi>
					)}
				</>
			)}
		</Observer>
	</CommentsWrap>
);

export default CommentsList;
