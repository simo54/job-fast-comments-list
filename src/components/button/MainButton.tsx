import React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';

export interface IButton extends ButtonProps {
	content: React.ReactNode;
}

const MainButton: React.FC<IButton> = ({ content, ...rest }) => {
	return <Button children={content} {...rest} />;
};

export default MainButton;
