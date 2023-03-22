export interface ActionResponse<T> {
	type: string;
	payload: T;
}

export interface ActionResponseVoid {
	type: string;
}
