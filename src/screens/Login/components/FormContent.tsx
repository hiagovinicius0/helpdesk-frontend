import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/Button';
import { H3 } from 'src/components/H3';
import { H4 } from 'src/components/H4';
import { userService } from 'src/services/user-service';
import { UserStore } from 'src/store/stores';
import { InputText, InputTextIcon } from './InputText';

interface IFormContent {
	onLogin: (user: UserStore) => void;
}

export const FormContent = ({ onLogin }: IFormContent): JSX.Element => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const clearForm = (): void => {
		setEmail('');
		setPassword('');
	};

	const validityFields = (): boolean => {
		if (email.length === 0) {
			alert('E-mail precisa ser preenchido');

			return false;
		}

		if (email.length === 0) {
			alert('Senha precisa ser preenchido');

			return false;
		}

		return true;
	};

	const sendToAPI = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault();

		if (!validityFields()) {
			return;
		}

		const data = {
			email,
			senha: password,
		};

		userService
			.login(data)
			.then((response) => {
				onLogin({
					id: response.data.usuario.id,
					accessToken: response.data.accessToken,
					name: response.data.usuario.nome,
				});
				navigate('/');
			})
			.catch((error) => {
				let message = '';
				message =
					error.code === 'ECONNABORTED' ? 'Servidor Offline!' : error?.response?.data?.message;
				alert(message);
				clearForm();
			});
	};

	return (
		<div className='md:w-8/12 lg:w-5/12 lg:ml-20 pt-3 text-center pb-14'>
			<form>
				<H3 title='Acesse sua conta' />
				<H4 title='Faça login para iniciar a sua sessão' />
				<InputText
					icon={InputTextIcon.EMAIL}
					placeholder={'E-mail'}
					value={email}
					setValue={setEmail}
				/>
				<InputText
					icon={InputTextIcon.PASSWORD}
					placeholder={'Senha'}
					value={password}
					setValue={setPassword}
				/>
				<Button text={'ENTRAR'} onClick={sendToAPI} />
			</form>
		</div>
	);
};
