import React from 'react';

export interface IParagraph {
	label: string;
}

const ParagraphText: React.FC<IParagraph> = ({ label }) => {
	return <p children={label} role={'paragraph'} />;
};

export default ParagraphText;
