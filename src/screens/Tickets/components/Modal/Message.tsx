import { MessageResponse } from 'src/services/response';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import 'moment-timezone';

interface IMessage extends MessageResponse {
	userIdLogged: number;
}

export const Message = ({ usuario, descricao, horario, userIdLogged }: IMessage): JSX.Element => {
	console.log(usuario.id, userIdLogged);

	return (
		<div
			className={
				usuario.id !== userIdLogged
					? 'bg-slate-400 rounded-md p-3 my-4 w-fit'
					: 'bg-slate-400 rounded-md p-3 my-4 text-right w-fit ml-auto'
			}
		>
			<h1 className='pb-2'>
				{usuario.nome} - {usuario.departamento.nome}
			</h1>
			<p className='text-base leading-relaxed  dark:text-gray-400 text-teal-900'>{descricao}</p>
			<span className='text-xs -pt-1'>
				<Moment format='LLLL' tz='America/Sao_Paulo'>
					{horario}
				</Moment>
			</span>
		</div>
	);
};
