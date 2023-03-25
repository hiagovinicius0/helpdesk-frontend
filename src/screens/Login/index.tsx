import { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { connector } from 'src/store/store-config';
import { Container } from './components/Container';
import { FormContent } from './components/FormContent';
import { ImageContent } from './components/ImageContent';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ILogin = PropsFromRedux;

const LoginScreen = ({ user, onLogin }: ILogin): JSX.Element => {
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
