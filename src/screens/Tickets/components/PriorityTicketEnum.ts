export enum TicketPriority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
}

interface Priority {
	text: string;
	color: string;
}

export const getPriority = (priority: TicketPriority): Priority => {
	switch (priority) {
		case TicketPriority.LOW:
			return { text: 'Baixa', color: 'bg-green-500' };
		case TicketPriority.MEDIUM:
			return { text: 'Média', color: 'bg-orange-500' };
		case TicketPriority.HIGH:
			return { text: 'Alta', color: 'bg-red-500' };
	}
};
