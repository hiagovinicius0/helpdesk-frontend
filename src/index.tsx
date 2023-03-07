import React from 'react';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SelectDepartment } from './screens/SelectDepartment';
import { Login } from './screens/Login';
import { CreateTicket } from './screens/CreateTicket';
import { Tickets } from './screens/Tickets';
import { getRoutes, Screen } from './routes/RoutesEnum';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={getRoutes(Screen.HOME).link} element={<Tickets />} />
			<Route path={getRoutes(Screen.SELECT_DEPARTMENT).link} element={<SelectDepartment />} />
			<Route path={getRoutes(Screen.LOGIN).link} element={<Login />} />
			<Route path={getRoutes(Screen.CREATE_TICKET).link} element={<CreateTicket />} />
			<Route path={getRoutes(Screen.TICKETS).link} element={<Tickets />} />
		</>,
	),
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
