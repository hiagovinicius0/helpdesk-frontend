import { Button, Modal } from 'flowbite-react';
import { Input, InputType } from 'src/components/Inputs';
import { messageService } from 'src/services/message-service';
import { MessageResponse, TicketHistoryResponse, TicketResponse } from 'src/services/response';
import { ticketService } from 'src/services/ticket-service';
import { UserStore } from 'src/store/stores';
import { statusSelect } from 'src/utils/TicketStatusItems';
import { TicketHistory } from '../HistoryTicketEnum';
import { TicketPriority } from '../PriorityTicketEnum';
import { TicketStatus } from '../StatusTicketEnum';
import { Message } from './Message';
import { Priority } from './Priority';
import { Status } from './Status';
import { prioritySelect } from 'src/utils/TicketPriorityItems';

interface IModalView {
	ticketModalHistory: TicketHistoryResponse[];
	ticketModal: TicketResponse | null;
	user: UserStore;
	getTicket: (ticketId: string) => void;
	responseVisible: boolean;
	setResponseVisible: (visible: boolean) => void;
	response: string;
	setResponse: (response: string) => void;
	statusVisible: boolean;
	setStatusVisible: (visible: boolean) => void;
	status: string;
	setStatus: (status: string) => void;
	priorityVisible: boolean;
	setPriorityVisible: (visible: boolean) => void;
	priority: string;
	setPriority: (priority: string) => void;
}

export const ModalView = ({
	ticketModal,
	user,
	ticketModalHistory,
	getTicket,
	response,
	responseVisible,
	setResponse,
	setResponseVisible,
	setStatus,
	setStatusVisible,
	status,
	statusVisible,
	priority,
	priorityVisible,
	setPriority,
	setPriorityVisible,
}: IModalView): JSX.Element => {
	if (ticketModal === null) {
		return <div></div>;
	}

	const openResponse = (): void => {
		setResponse('');
		setResponseVisible(true);
	};

	const openStatus = (): void => {
		setStatus(ticketModal.ultimoStatus.toString());
		setStatusVisible(true);
	};

	const openPriority = (): void => {
		setPriority(ticketModal.prioridade.toString());
		setPriorityVisible(true);
	};

	const sendResponse = (): void => {
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

	const modifyStatus = (): void => {
		ticketService
			.modifyTicket({
				accessToken: user.accessToken as string,
				ultimoStatus: parseInt(status as string) as TicketStatus,
				id: ticketModal.id,
			})
			.then(() => {
				setStatus('');
				setStatusVisible(false);
				getTicket(ticketModal.id);
			});
	};

	const modifyPriority = (): void => {
		ticketService
			.modifyTicket({
				accessToken: user.accessToken as string,
				prioridade: parseInt(priority as string) as TicketPriority,
				id: ticketModal.id,
			})
			.then(() => {
				setPriority('');
				setPriorityVisible(false);
				getTicket(ticketModal.id);
			});
	};

	return (
		<>
			<Modal.Header>
				#{ticketModal.ordem} - {ticketModal.titulo}
			</Modal.Header>
			<Modal.Body className='overflow-auto max-h-96'>
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

				{statusVisible && (
					<Input
						span='Status'
						type={InputType.SELECT}
						value={status}
						setValue={setStatus}
						selectOptions={{
							options: statusSelect,
						}}
					/>
				)}

				{priorityVisible && (
					<Input
						span='Prioridade'
						type={InputType.SELECT}
						value={priority}
						setValue={setPriority}
						selectOptions={{
							options: prioritySelect,
						}}
					/>
				)}

				{!statusVisible && !priorityVisible && (
					<Button
						disabled={ticketModal.ultimoStatus === TicketStatus.FINISHED && user.role !== 1}
						onClick={!responseVisible ? (): void => openResponse() : (): void => sendResponse()}
					>
						{responseVisible ? 'Enviar' : 'Responder'}
					</Button>
				)}

				{!responseVisible && !priorityVisible && (
					<Button
						disabled={ticketModal.ultimoStatus === TicketStatus.FINISHED && user.role !== 1}
						onClick={!statusVisible ? (): void => openStatus() : (): void => modifyStatus()}
						color='warning'
					>
						{statusVisible ? 'Enviar' : 'Alterar Status'}
					</Button>
				)}

				{!responseVisible && !statusVisible && (
					<Button
						disabled={ticketModal.ultimoStatus === TicketStatus.FINISHED && user.role !== 1}
						onClick={!priorityVisible ? (): void => openPriority() : (): void => modifyPriority()}
						color='purple'
					>
						{priorityVisible ? 'Enviar' : 'Alterar Prioridade'}
					</Button>
				)}
			</Modal.Footer>
		</>
	);
};
