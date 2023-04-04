import axios, { AxiosResponse } from 'axios';
import {
	AccessTokenRequest,
	BodyCreateDepartmentRequest,
	BodyUpdateDepartmentRequest,
	QueryDepartmentRequest,
} from './request';
import { DepartamentResponse } from './response';

class DepartmentService {
	axios = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			'Content-type': 'application/json',
		},
	});

	async getDepartments(
		queryDepartmentRequest: AccessTokenRequest,
	): Promise<AxiosResponse<DepartamentResponse[]>> {
		return this.axios
			.get<DepartamentResponse[]>('/departamentos', {
				headers: { Authorization: `Bearer ${queryDepartmentRequest.accessToken}` },
			})
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async getDepartment(
		queryDepartmentRequest: QueryDepartmentRequest,
	): Promise<AxiosResponse<DepartamentResponse>> {
		return this.axios
			.get<DepartamentResponse>(`/departamentos/${queryDepartmentRequest.departmentId}`, {
				headers: { Authorization: `Bearer ${queryDepartmentRequest.accessToken}` },
			})
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async updateDepartment(
		bodyUpdateDepartmentRequest: BodyUpdateDepartmentRequest,
	): Promise<AxiosResponse<DepartamentResponse>> {
		return this.axios
			.patch<DepartamentResponse>(
				`/departamentos/${bodyUpdateDepartmentRequest.departmentId}`,
				{
					ativo: bodyUpdateDepartmentRequest.ativo,
					nome: bodyUpdateDepartmentRequest.nome,
					icone: bodyUpdateDepartmentRequest.icone,
				},
				{
					headers: { Authorization: `Bearer ${bodyUpdateDepartmentRequest.accessToken}` },
				},
			)
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async createDepartment(
		bodyCreateDepartmentRequest: BodyCreateDepartmentRequest,
	): Promise<AxiosResponse<DepartamentResponse>> {
		return this.axios
			.post<DepartamentResponse>(
				'/departamentos',
				{
					nome: bodyCreateDepartmentRequest.nome,
					icone: bodyCreateDepartmentRequest.icone,
				},
				{
					headers: { Authorization: `Bearer ${bodyCreateDepartmentRequest.accessToken}` },
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

export const departmentService = new DepartmentService();
