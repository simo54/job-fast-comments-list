import React from 'react';
import { Container } from 'react-bootstrap';
import { IComment } from '../../types/comments';
import CommentDetails from '../commentDetails/CommentDetails';
import ParagraphText from '../typography/paragraphs/Paragraph';

interface ICommentsList {
	comments: IComment[];
}

const CommentsList: React.FC<ICommentsList> = ({ comments }) => {
	return (
		<>
			{comments.length > 0 ? (
				comments.map((value, index) => {
					return <CommentDetails cardObject={value} key={index} />;
				})
			) : (
				<Container className="p-0 mt-5">
					<ParagraphText label="There are no results" />
				</Container>
			)}
		</>
	);
};

export default CommentsList;
