import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph';

test('renders <Paragraph>', () => {
	render(<Paragraph label="Paragraph" />);
	const element = screen.getByRole('paragraph');
	expect(element).toBeInTheDocument();
});
