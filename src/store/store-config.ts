import { combineReducers, legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { ConnectedProps, connect } from 'react-redux';
import { userReducer } from './reducers/user.reducer';
import { ConfigStoreResponse, StateTypes } from './state-types';
import localStorage from 'redux-persist/es/storage';
import { UserStore } from './stores';
import { login, logout } from './actions/user.action';
import { ActionResponse, ActionResponseVoid } from './types';

const reducers = combineReducers({
	user: userReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const mapState = (state: RootState): StateTypes => ({
	user: state.user,
});

export const mapDispatch = {
	// user
	onLogin: (user: UserStore): ActionResponse<UserStore> => login(user),
	onLogout: (): ActionResponseVoid => logout(),
};

export default function configStore(): ConfigStoreResponse {
	const persistConfig = {
		key: 'HELPDESK',
		storage: localStorage,
	};
	const persistedReducer = persistReducer(persistConfig, reducers);
	const store = createStore(persistedReducer);
	const persistor = persistStore(store);

	return { store, persistor };
}

export const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;
