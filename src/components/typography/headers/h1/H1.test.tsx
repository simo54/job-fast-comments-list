import React from 'react';
import { render, screen } from '@testing-library/react';
import H1 from './H1';

test('renders <H1>', () => {
	render(<H1 label="Title" />);
	const element = screen.getByRole('heading');
	expect(element).toBeInTheDocument();
});
