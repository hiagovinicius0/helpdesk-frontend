import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropsFromRedux, connector } from 'src/store/store-config';
import { Container } from './components/Container';
import { FormContent } from './components/FormContent';
import { ImageContent } from './components/ImageContent';

const LoginScreen = ({ user, onLogin }: PropsFromRedux): JSX.Element => {
	const navigate = useNavigate();

	const verifyIsOnline = (): void => {
		if (user.id) {
			navigate('/');
		}
	};

	useEffect(() => {
		verifyIsOnline();
	}, []);

	return (
		<Container>
			<ImageContent />
			<FormContent onLogin={onLogin} />
		</Container>
	);
};

export const Login = connector(LoginScreen);
