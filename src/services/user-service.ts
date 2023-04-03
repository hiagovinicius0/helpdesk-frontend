import axios, { AxiosResponse } from 'axios';
import { AccessTokenRequest, BodyLoginRequest, StatusResponse } from './request';
import { LoginResponse } from './response';

class UserService {
	axios = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			'Content-type': 'application/json',
		},
	});

	async status(accessTokenRequest: AccessTokenRequest): Promise<AxiosResponse<StatusResponse>> {
		return this.axios
			.get<StatusResponse>('/auth/status', {
				headers: { Authorization: `Bearer ${accessTokenRequest.accessToken}` },
			})
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async login(bodyLogin: BodyLoginRequest): Promise<AxiosResponse<LoginResponse>> {
		return this.axios
			.post<LoginResponse>('/auth/login', bodyLogin)
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}
}

export const userService = new UserService();
