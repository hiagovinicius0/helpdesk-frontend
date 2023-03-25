import axios, { AxiosResponse } from 'axios';
import { BodyCreateMessageRequest } from './request';
import { MessageResponse } from './response';

class MessageService {
	axios = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			'Content-type': 'application/json',
		},
	});

	async create(
		bodyCreateMessage: BodyCreateMessageRequest,
	): Promise<AxiosResponse<MessageResponse>> {
		return this.axios
			.post<MessageResponse>(
				'/mensagens',
				{
					descricao: bodyCreateMessage.descricao,
					chamadoId: bodyCreateMessage.chamadoId,
				},
				{
					headers: { Authorization: `Bearer ${bodyCreateMessage.accessToken}` },
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

export const messageService = new MessageService();
