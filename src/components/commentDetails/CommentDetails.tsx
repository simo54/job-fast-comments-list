import React from 'react';
import Card from 'react-bootstrap/Card';
import { IComment } from '../../types/comments';

interface ICommentDetails {
	cardObject: IComment;
}

const CommentDetails: React.FC<ICommentDetails> = ({ cardObject }) => {
	return (
		<Card key={cardObject.id} className={'single-card-comment mt-2 mb-2'}>
			<Card.Body>
				<Card.Title>{cardObject.name}</Card.Title>
				<Card.Text className={'fst-italic'}>{cardObject.email}</Card.Text>
				<Card.Text>{cardObject.body}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CommentDetails;
