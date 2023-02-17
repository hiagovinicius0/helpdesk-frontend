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

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<SelectDepartment />} />
			<Route path='login' element={<Login />} />
			<Route path='/tickets/select-department' element={<CreateTicket />} />
		</>,
	),
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
