import { TicketPriority } from 'src/screens/Tickets/components/PriorityTicketEnum';
import { TicketStatus } from 'src/screens/Tickets/components/StatusTicketEnum';

export interface BodyLoginRequest {
	email: string;
	senha: string;
}

export interface AccessTokenRequest {
	accessToken: string;
}

export interface QueryTicketRequest extends AccessTokenRequest {
	ticketId: string;
}

export interface BodyCreateMessageRequest extends AccessTokenRequest {
	descricao: string;
	chamadoId: string;
}

export interface BodyPatchModifyTicket extends AccessTokenRequest {
	prioridade?: TicketPriority;
	ultimoStatus?: TicketStatus;
	id: string;
}
