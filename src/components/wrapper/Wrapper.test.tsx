import React from 'react';
import { render, screen } from '@testing-library/react';
import Wrapper from './Wrapper';
import ParagraphText from '../typography/paragraphs/Paragraph';

test('renders <Wrapper>', () => {
	render(
		<Wrapper
			children={
				<>
					<ParagraphText label="test" />
				</>
			}
		/>
	);
	const element = screen.getByRole('grid');
	expect(element).toBeInTheDocument();
});
