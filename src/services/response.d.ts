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
	id: string;
	ativo: boolean;
	nome: string;
}
