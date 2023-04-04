import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { PropsFromRedux, connector } from 'src/store/store-config';
import { Container } from '../SelectDepartment/components/Container';
import { DepartmentsTable } from './components/DepartmentsTable';
import { departmentService } from 'src/services/department-service';
import { DepartamentResponse } from 'src/services/response';
import { ModalType, ModalView } from './components/Modal';

const DepartmentsScreen = ({ user }: PropsFromRedux): JSX.Element => {
	const history = [getRoutes(Screen.HOME), getRoutes(Screen.DEPARTMENTS)];
	const [show, setShow] = useState<boolean>(false);
	const [departments, setDepartments] = useState<DepartamentResponse[]>([]);
	const [departmentModal, setDepartmentModal] = useState<DepartamentResponse | null>(null);
	const [active, setActiveState] = useState(false);
	const [name, setName] = useState('');
	const [icon, setIcon] = useState('');
	const [modalType, setModalType] = useState(ModalType.CREATE);

	const onClose = (): void => {
		setShow(false);
	};

	const setActive = (): void => {
		setActiveState(!active);
	};

	const getDepartments = (): void => {
		departmentService
			.getDepartments({ accessToken: user.accessToken as string })
			.then((respose) => setDepartments(respose.data));
	};

	const getDepartment = (departmentId: number): void => {
		departmentService
			.getDepartment({ accessToken: user.accessToken as string, departmentId })
			.then((respose) => {
				setModalType(ModalType.UPDATE);
				setShow(true);
				setDepartmentModal(respose.data);
				setName(respose.data.nome);
				setIcon(respose.data.icone);
				setActiveState(respose.data.ativo);
			});
	};

	const createDepartment = (): void => {
		setModalType(ModalType.CREATE);
		setShow(true);
		setDepartmentModal(null);
		setName('');
		setIcon('');
		setActiveState(false);
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
						<Button onClick={(): void => createDepartment()}>Criar Departamento</Button>
					</div>
					<Container>
						<DepartmentsTable departments={departments} getDepartment={getDepartment} />
					</Container>
				</>
			</Navbar>
			<Modal show={show} onClose={(): void => onClose()} size='5xl'>
				<ModalView
					active={active.toString()}
					departmentModal={departmentModal}
					icon={icon}
					name={name}
					setActive={setActive}
					setIcon={setIcon}
					setName={setName}
					getDepartments={getDepartments}
					user={user}
					setShow={setShow}
					modalType={modalType}
				/>
			</Modal>
		</>
	);
};

export const Departments = connector(DepartmentsScreen);
