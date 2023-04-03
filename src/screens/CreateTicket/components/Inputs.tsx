import { useState } from 'react';
import { Button } from 'src/components/Button';
import { Input, InputType } from 'src/components/Inputs';
import { DepartamentResponse } from 'src/services/response';
import { ticketService } from 'src/services/ticket-service';
import { UserStore } from 'src/store/stores';
import { useNavigate } from 'react-router-dom';
import { Screen, getRoutes } from 'src/routes/RoutesEnum';
import { TicketPriority } from 'src/screens/Tickets/components/PriorityTicketEnum';

interface IInputs {
	department: DepartamentResponse | null;
	user: UserStore;
}

export const Inputs = ({ department, user }: IInputs): JSX.Element => {
	const [subject, setSubject] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [degree, setDegree] = useState<string>('');

	const optionsSelect = [
		{ value: '', text: 'Selecione' },
		{ value: '1', text: 'Baixo' },
		{ value: '2', text: 'Médio' },
		{ value: '3', text: 'Alto' },
	];

	const navigate = useNavigate();

	const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault();

		if (subject.length === 0 || description.length === 0) {
			alert('Preencha todos os campos!');
		}

		ticketService
			.createTicket({
				accessToken: user.accessToken as string,
				departamentoResponsavel: department?.id as number,
				descricao: description,
				prioridade: parseInt(degree) as unknown as TicketPriority,
				titulo: subject,
			})
			.then(() => {
				navigate(getRoutes(Screen.TICKETS).link);
			});
	};

	return (
		<div>
			<Input span='Assunto' type={InputType.TEXT} value={subject} setValue={setSubject} />
			<Input
				span='Descrição'
				type={InputType.TEXTAREA}
				value={description}
				setValue={setDescription}
			/>
			<Input
				span='Grau de Necessidade'
				type={InputType.SELECT}
				selectOptions={{
					options: optionsSelect,
				}}
				value={degree}
				setValue={setDegree}
			/>
			<div className='flex justify-center pt-3'>
				<Button text='Abrir Chamado' onClick={onClick} />
			</div>
		</div>
	);
};
