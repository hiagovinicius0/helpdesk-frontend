import { UserStore } from '../stores';

export interface UserAction {
	type: string;
	payload: UserStore;
}
