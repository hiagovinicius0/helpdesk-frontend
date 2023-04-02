import { Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { TicketHistoryResponse, TicketResponse } from 'src/services/response';
import { ticketService } from 'src/services/ticket-service';
import { connector } from 'src/store/store-config';
import { Container } from '../SelectDepartment/Container';
import { ModalView } from './components/Modal';
import { Ticket } from './components/Ticket';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ITickets = PropsFromRedux;

const TicketsScreen = ({ user }: ITickets): JSX.Element => {
	const history = [getRoutes(Screen.HOME).name, getRoutes(Screen.TICKETS).name];
	const [show, setShow] = useState<boolean>(false);
	const [tickets, setTickets] = useState<TicketResponse[]>([]);
	const [ticketModalHistory, setTicketModalHistory] = useState<TicketHistoryResponse[]>([]);
	const [ticketModal, setTicketModal] = useState<TicketResponse | null>(null);
	const [responseVisible, setResponseVisible] = useState<boolean>(false);
	const [response, setResponse] = useState<string>('');
	const [statusVisible, setStatusVisible] = useState<boolean>(false);
	const [status, setStatus] = useState<string>('');
	const [priorityVisible, setPriorityVisible] = useState<boolean>(false);
	const [priority, setPriority] = useState<string>('');

	const showModal = (ticketId: string): void => {
		getTicket(ticketId);
		setShow(true);
	};

	const getTickets = (): void => {
		ticketService.getTickets({ accessToken: user.accessToken as string }).then((response) => {
			setTickets(response.data);
		});
	};

	const getTicket = (ticketId: string): void => {
		ticketService
			.getHistory({
				accessToken: user.accessToken as string,
				ticketId,
			})
			.then((response) => {
				setTicketModalHistory(response.data);
				const foundTicket = tickets.find((ticket) => ticket.id === ticketId);
				setTicketModal(foundTicket as TicketResponse);
			});
	};

	const onClose = (): void => {
		setShow(false);
		setResponseVisible(false);
		setStatusVisible(false);
		setResponse('');
		setStatus('');
		setPriorityVisible(false);
		setPriority('');
	};

	useEffect(() => {
		getTickets();
	}, []);

	return (
		<>
			<Navbar user={user}>
				<>
					<HistoryNavigation history={history} />
					{tickets.map((item, index) => {
						return (
							<Container key={index}>
								<Ticket {...item} showModal={showModal} />
							</Container>
						);
					})}
				</>
			</Navbar>
			<Modal show={show} onClose={(): void => onClose()} size='5xl'>
				<ModalView
					ticketModalHistory={ticketModalHistory}
					user={user}
					ticketModal={ticketModal}
					getTicket={getTicket}
					responseVisible={responseVisible}
					setResponseVisible={setResponseVisible}
					response={response}
					setResponse={setResponse}
					statusVisible={statusVisible}
					setStatusVisible={setStatusVisible}
					status={status}
					setStatus={setStatus}
					priority={priority}
					setPriority={setPriority}
					priorityVisible={priorityVisible}
					setPriorityVisible={setPriorityVisible}
				/>
			</Modal>
		</>
	);
};

export const Tickets = connector(TicketsScreen);
