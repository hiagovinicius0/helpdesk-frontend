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
