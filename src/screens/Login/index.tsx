import { ReactNode } from 'react';
import { Container } from './components/Container';
import { FormContent } from './components/FormContent';
import { ImageContent } from './components/ImageContent';

export const Login = (): ReactNode => {
	return (
		<Container>
			<ImageContent />
			<FormContent />
		</Container>
	);
};
