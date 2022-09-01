import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentsSection from './CommentsSection';

test('renders <CommentsSection>', async () => {
	render(<CommentsSection />);
	const linkElement = await screen.findAllByPlaceholderText('Try search for "lore"...');
	expect(linkElement[0]).toBeInTheDocument();
});
