import { TicketPriority } from 'src/screens/Tickets/components/PriorityTicketEnum';
import { TicketStatus } from 'src/screens/Tickets/components/StatusTicketEnum';

export const TicketItems: ITicketItems[] = [
	{
		title: 'Chamado 1',
		createdAt: '2023-02-04T11:13:41.000Z',
		priority: TicketPriority.LOW,
		status: TicketStatus.FINISHED,
	},
	{
		title: 'Chamado 2',
		createdAt: '2023-02-01T23:13:41.000Z',
		priority: TicketPriority.HIGH,
		status: TicketStatus.IN_ATTENDANCE,
	},
	{
		title: 'Chamado 3',
		createdAt: '2023-02-05T11:13:41.000Z',
		priority: TicketPriority.MEDIUM,
		status: TicketStatus.IN_DELAY,
	},
	{
		title: 'Chamado 4',
		createdAt: '2023-02-03T09:13:41.000Z',
		priority: TicketPriority.LOW,
		status: TicketStatus.NOT_MET,
	},
];

export interface ITicketItems {
	createdAt: string;
	priority: TicketPriority;
	status: TicketStatus;
	title: string;
}
