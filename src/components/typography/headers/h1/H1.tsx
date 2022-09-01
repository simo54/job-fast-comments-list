import React from 'react';

export interface IHeaderTitle {
	label: string;
}

const H1: React.FC<IHeaderTitle> = ({ label }) => {
	return <h1 children={label} />;
};

export default H1;
