import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from './components/heading/Heading';
import CommentsSection from './page/CommentsSection';

const App: React.FC = () => {
	return (
		<Container role={'body'}>
			<Heading />
			<CommentsSection />
		</Container>
	);
};

export default App;
