import { Container } from './components/Container';
import { FormContent } from './components/FormContent';
import { ImageContent } from './components/ImageContent';

export const Login = (): JSX.Element => {
	return (
		<Container>
			<ImageContent />
			<FormContent />
		</Container>
	);
};
