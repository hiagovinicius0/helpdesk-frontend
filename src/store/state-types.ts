/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmptyObject, Store } from 'redux';
import { UserAction } from './actions/i-actions';
import { UserStore } from './stores';

export interface StateTypes {
	user: UserStore;
}

export interface ConfigStoreResponse {
	store: Store<
		EmptyObject & {
			user: UserStore;
		} & any,
		UserAction
	>;
	persistor: any;
}
