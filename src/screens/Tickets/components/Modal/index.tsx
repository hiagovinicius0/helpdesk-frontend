import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Input, InputType } from 'src/components/Inputs';
import { messageService } from 'src/services/message-service';
import { MessageResponse, TicketHistoryResponse, TicketResponse } from 'src/services/response';
import { UserStore } from 'src/store/stores';
import { TicketHistory } from '../HistoryTicketEnum';
import { TicketPriority } from '../PriorityTicketEnum';
import { TicketStatus } from '../StatusTicketEnum';
import { Message } from './Message';
import { Priority } from './Priority';
import { Status } from './Status';

interface IModalView {
	ticketModalHistory: TicketHistoryResponse[];
	ticketModal: TicketResponse | null;
	user: UserStore;
	getTicket: (ticketId: string) => void;
}

export const ModalView = ({
	ticketModal,
	user,
	ticketModalHistory,
	getTicket,
}: IModalView): JSX.Element => {
	const [responseVisible, setResponseVisible] = useState<boolean>(false);
	const [response, setResponse] = useState<string>('');

	if (ticketModal === null) {
		return <div></div>;
	}

	const openResponse = (): void => {
		setResponse('');
		setResponseVisible(true);
	};

	const sendResponse = (): void => {
		console.log('clicou');
		console.log(response);
		messageService
			.create({
				accessToken: user.accessToken as string,
				chamadoId: ticketModal.id,
				descricao: response,
			})
			.then(() => {
				setResponse('');
				setResponseVisible(false);
				getTicket(ticketModal.id);
			});
	};

	return (
		<>
			<Modal.Header>
				#{ticketModal.ordem} - {ticketModal.titulo}
			</Modal.Header>
			<Modal.Body>
				<>
					{ticketModalHistory.map((history, index) => {
						switch (history.tipoHistorico) {
							case TicketHistory.MESSAGE:
								return (
									<Message
										{...(history.mensagem as MessageResponse)}
										key={index}
										userIdLogged={user.id as number}
									/>
								);
							case TicketHistory.PRIORITY:
								return (
									<Priority
										createdAt={history.createdAt}
										departmentName={history.usuario.departamento.nome}
										priority={history.prioridade as TicketPriority}
										userName={history.usuario.nome}
										key={index}
									/>
								);
							case TicketHistory.STATUS:
								return (
									<Status
										createdAt={history.createdAt}
										departmentName={history.usuario.departamento.nome}
										status={history.status as TicketStatus}
										userName={history.usuario.nome}
										key={index}
									/>
								);
						}
					})}
				</>
			</Modal.Body>
			<Modal.Footer>
				{responseVisible && (
					<Input
						span='Resposta'
						type={InputType.TEXTAREA}
						value={response}
						setValue={setResponse}
					/>
				)}

				<Button
					disabled={ticketModal.ultimoStatus === TicketStatus.FINISHED}
					onClick={!responseVisible ? (): void => openResponse() : (): void => sendResponse()}
				>
					{responseVisible ? 'Enviar' : 'Responder'}
				</Button>
			</Modal.Footer>
		</>
	);
};
