import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { TicketItems } from 'src/utils/Tickets';
import { Container } from '../SelectDepartment/Container';
import { Ticket } from './components/Ticket';

export const Tickets = (): JSX.Element => {
	const history = [getRoutes(Screen.HOME).name, getRoutes(Screen.TICKETS).name];

	return (
		<Navbar>
			<>
				<HistoryNavigation history={history} />

				{TicketItems.map((item, index) => {
					return (
						<Container key={index}>
							<Ticket {...item} />
						</Container>
					);
				})}
			</>
		</Navbar>
	);
};
