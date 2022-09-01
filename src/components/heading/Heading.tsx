import React from 'react';
import H1 from '../typography/headers/h1/H1';
import ParagraphText from '../typography/paragraphs/Paragraph';
import Wrapper from '../wrapper/Wrapper';

const Heading: React.FC = () => {
	return (
		<Wrapper
			children={
				<>
					<H1 label="Welcome to the comments section" />
					<ParagraphText label="Type your role in the search input to see the results. If you don't find it, try the search button for more details." />
				</>
			}
		/>
	);
};

export default Heading;
