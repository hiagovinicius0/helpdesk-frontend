import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../action-types';
import { UserAction } from '../actions/i-actions';
import { UserStore } from '../stores';

const initialState = {
	id: null,
	name: null,
	accessToken: null,
	refreshToken: null,
	role: null,
	department: null,
} as unknown as UserStore;

export const userReducer = (state = initialState, action: UserAction): UserStore => {
	switch (action.type) {
		case USER_LOGGED_IN:
			return {
				id: action.payload.id,
				name: action.payload.name,
				accessToken: action.payload.accessToken,
				role: action.payload.role,
				department: action.payload.department,
			};

		case USER_LOGGED_OUT:
			return {
				id: null,
				name: null,
				accessToken: null,
				department: null,
				role: null,
			};

		default:
			return state;
	}
};
