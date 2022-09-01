import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMockedComments } from '../../mock/CommentsMock';
import CommentsList from './CommentsList';

test('renders <CommentsList>', () => {
	render(<CommentsList comments={createMockedComments(1)} />);
	const element = screen.getByText('This is a mocked body');
	expect(element).toBeInTheDocument();
});
