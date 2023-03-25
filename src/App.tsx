import { Provider } from 'react-redux';
import configStore from './store/store-config';
import { PersistGate } from 'redux-persist/integration/react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { getRoutes, Screen } from './routes/RoutesEnum';
import { Tickets } from './screens/Tickets';
import { SelectDepartment } from './screens/SelectDepartment';
import { Login } from './screens/Login';
import { CreateTicket } from './screens/CreateTicket';
import { Logout } from './screens/Logout';

export const App = (): JSX.Element => {
	const { store, persistor } = configStore();

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path={getRoutes(Screen.LOGIN).link} element={<Login />} />
				<Route path={getRoutes(Screen.HOME).link} element={<Tickets />} />
				<Route path={getRoutes(Screen.SELECT_DEPARTMENT).link} element={<SelectDepartment />} />

				<Route path={getRoutes(Screen.CREATE_TICKET).link} element={<CreateTicket />} />
				<Route path={getRoutes(Screen.TICKETS).link} element={<Tickets />} />
				<Route path={getRoutes(Screen.LOGOUT).link} element={<Logout />} />
			</>,
		),
	);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	);
};
