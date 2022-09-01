import React from 'react';
import { Row, Col, RowProps } from 'react-bootstrap';

interface IWrapper extends RowProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
	return (
		<Row role={'grid'}>
			<Col>{children}</Col>
		</Row>
	);
};

export default Wrapper;
