import axios, { AxiosResponse } from 'axios';
import { AccessTokenRequest, BodyPatchModifyTicket, QueryTicketRequest } from './request';
import { TicketHistoryResponse, TicketResponse } from './response';

class TicketService {
	axios = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			'Content-type': 'application/json',
		},
	});

	async getTickets(
		queryTicketsRequest: AccessTokenRequest,
	): Promise<AxiosResponse<TicketResponse[]>> {
		return this.axios
			.get<TicketResponse[]>('/chamados', {
				headers: { Authorization: `Bearer ${queryTicketsRequest.accessToken}` },
			})
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async getHistory(
		queryTicketsRequest: QueryTicketRequest,
	): Promise<AxiosResponse<TicketHistoryResponse[]>> {
		return this.axios
			.get<TicketHistoryResponse[]>(`/chamados/${queryTicketsRequest.ticketId}/historico`, {
				headers: { Authorization: `Bearer ${queryTicketsRequest.accessToken}` },
			})
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async modifyTicket(
		bodyPatchModifyTicket: BodyPatchModifyTicket,
	): Promise<AxiosResponse<TicketResponse>> {
		return this.axios
			.patch<TicketResponse>(
				`/chamados/${bodyPatchModifyTicket.id}`,
				{
					prioridade: bodyPatchModifyTicket.prioridade,
					ultimoStatus: bodyPatchModifyTicket.ultimoStatus,
				},
				{
					headers: { Authorization: `Bearer ${bodyPatchModifyTicket.accessToken}` },
				},
			)
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}
}

export const ticketService = new TicketService();
