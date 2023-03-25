import { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { connector } from 'src/store/store-config';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ILogout = PropsFromRedux;

const LogoutScreen = ({ onLogout }: ILogout): JSX.Element => {
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
