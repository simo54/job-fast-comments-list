import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentDetails from './CommentDetails';
import { singleMockedComment } from '../../mock/CommentsMock';

describe('CommentDetails', () => {
	test('renders <CommentDetails>', () => {
		render(<CommentDetails cardObject={singleMockedComment} key={1} />);
		const element = screen.getByText('Test 1');
		expect(element).toBeInTheDocument();
	});
});
