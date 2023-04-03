import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropsFromRedux, connector } from 'src/store/store-config';

const LogoutScreen = ({ onLogout }: PropsFromRedux): JSX.Element => {
	const navigate = useNavigate();

	const logout = (): void => {
		onLogout();
		navigate('/login');
	};

	useEffect(() => {
		logout();
	}, []);

	return <div></div>;
};

export const Logout = connector(LogoutScreen);
