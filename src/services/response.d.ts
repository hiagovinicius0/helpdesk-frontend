import { TicketPriority } from 'src/screens/Tickets/components/PriorityTicketEnum';
import { TicketStatus } from 'src/screens/Tickets/components/StatusTicketEnum';

export interface LoginResponse {
	accessToken: string;
	usuario: UserResponse;
}

export interface UserResponse {
	id: number;
	funcao: number;
	nome: string;
	departamento: DepartamentResponse;
}

export interface DepartamentResponse {
	id: number;
	ativo: boolean;
	nome: string;
	email: string;
}

export interface TicketResponse {
	id: string;
	titulo: string;
	ordem: number;
	dtaInsercao: string;
	dtaExpiracao: string;
	prioridade: number;
	ultimoStatus: number;
	ativo: boolean;
	departamentoResponsavel: DepartamentResponse;
	usuarioCriador: UserResponse;
	mensagens: MessageResponse[];
}

export interface TicketHistoryResponse {
	id: string;
	status: TicketStatus | null;
	prioridade: TicketPriority | null;
	tipoHistorico: TicketHistory;
	mensagem: MessageResponse | null;
	usuario: UserResponse;
	chamado: TicketResponse;
	createdAt: string;
}

export interface MessageResponse {
	id: string;
	descricao: string;
	horario: string;
	usuario: UserResponse;
}
