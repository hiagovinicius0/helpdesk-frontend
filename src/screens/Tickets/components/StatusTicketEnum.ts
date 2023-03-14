export enum TicketStatus {
	NOT_MET = 1,
	IN_ATTENDANCE = 2,
	IN_DELAY = 3,
	FINISHED = 4,
}

interface Status {
	text: string;
}

export const getStatus = (status: TicketStatus): Status => {
	switch (status) {
		case TicketStatus.NOT_MET:
			return { text: 'Não Atendido' };
		case TicketStatus.IN_ATTENDANCE:
			return { text: 'Em Atendimento' };
		case TicketStatus.IN_DELAY:
			return { text: 'Em Atraso' };
		case TicketStatus.FINISHED:
			return { text: 'Finalizado' };
	}
};
