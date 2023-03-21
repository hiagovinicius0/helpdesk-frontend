import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { TicketItems } from 'src/utils/Tickets';
import { Container } from '../SelectDepartment/Container';
import { ModalView } from './components/Modal';
import { Ticket } from './components/Ticket';

export const Tickets = (): JSX.Element => {
	const history = [getRoutes(Screen.HOME).name, getRoutes(Screen.TICKETS).name];
	const [show, setShow] = useState<boolean>(false);

	const showModal = (): void => {
		setShow(true);
	};

	return (
		<>
			<Navbar>
				<>
					<HistoryNavigation history={history} />
					{TicketItems.map((item, index) => {
						return (
							<Container key={index}>
								<Ticket {...item} showModal={showModal} />
							</Container>
						);
					})}
				</>
			</Navbar>
			<Modal show={show} onClose={(): void => setShow(false)} size='5xl'>
				<ModalView />
			</Modal>
		</>
	);
};
