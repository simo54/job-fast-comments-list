import React from 'react';
import { render, screen } from '@testing-library/react';
import H6 from './H6';

test('renders <H1>', () => {
	render(<H6 label="Title" />);
	const element = screen.getByRole('heading');
	expect(element).toBeInTheDocument();
});
