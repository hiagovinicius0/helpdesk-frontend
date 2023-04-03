import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { PropsFromRedux, connector } from 'src/store/store-config';
import { Container } from '../SelectDepartment/components/Container';
import { DepartmentsTable } from './components/DepartmentsTable';
import { departmentService } from 'src/services/department-service';
import { DepartamentResponse } from 'src/services/response';

const DepartmentsScreen = ({ user }: PropsFromRedux): JSX.Element => {
	const history = [getRoutes(Screen.HOME), getRoutes(Screen.DEPARTMENTS)];
	const [show, setShow] = useState<boolean>(false);
	const [departments, setDepartments] = useState<DepartamentResponse[]>([]);

	const onClose = (): void => {
		setShow(false);
	};

	const getDepartments = (): void => {
		departmentService
			.getDepartments({ accessToken: user.accessToken as string })
			.then((respose) => setDepartments(respose.data));
	};

	useEffect(() => {
		getDepartments();
	}, []);

	return (
		<>
			<Navbar user={user}>
				<>
					<HistoryNavigation history={history} />
					<div className='flex flex-row-reverse'>
						<Link to={getRoutes(Screen.SELECT_DEPARTMENT).link}>
							<Button>Criar Departamento</Button>
						</Link>
					</div>
					<Container>
						<DepartmentsTable departments={departments} />
					</Container>
				</>
			</Navbar>
			<Modal show={show} onClose={(): void => onClose()} size='5xl'></Modal>
		</>
	);
};

export const Departments = connector(DepartmentsScreen);
