import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
	test('renders <Heading>', () => {
		render(<Heading />);
		const element = screen.getByText('Welcome to the comments section');
		expect(element).toBeInTheDocument();
	});
});
