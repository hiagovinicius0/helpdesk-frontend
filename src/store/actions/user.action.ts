import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../action-types';
import { UserStore } from '../stores';
import { ActionResponse, ActionResponseVoid } from '../types';

export const login = (user: UserStore): ActionResponse<UserStore> => {
	return {
		type: USER_LOGGED_IN,
		payload: user,
	};
};

export const logout = (): ActionResponseVoid => {
	return {
		type: USER_LOGGED_OUT,
	};
};
