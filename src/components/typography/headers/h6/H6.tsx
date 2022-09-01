import React from 'react';

export interface IHeaderTitle {
	label: string;
}

const H6: React.FC<IHeaderTitle> = ({ label }) => {
	return <h6 children={label} />;
};

export default H6;
