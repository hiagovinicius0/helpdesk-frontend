import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserStore } from 'src/store/stores';

interface AuthenticationProps {
	user: UserStore;
}

export const Authentication = ({ user }: AuthenticationProps): JSX.Element => {
	const navigate = useNavigate();

	const verifyUser = (): void => {
		if (user.id === null || user.name === null || user.accessToken === null) {
			navigate('/login');
		}
	};

	useEffect(() => {
		verifyUser();
	}, [user]);

	return <div></div>;
};
