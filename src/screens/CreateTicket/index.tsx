import { ConnectedProps } from 'react-redux';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { connector } from 'src/store/store-config';
import { Container } from '../SelectDepartment/Container';
import { ContainerTitle } from './ContainerTitle';
import { Content } from './Content';
import { Inputs } from './Inputs';
import { departmentService } from 'src/services/department-service';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DepartamentResponse } from 'src/services/response';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ICreateTicket = PropsFromRedux;

const CreateTicketScreen = ({ user }: ICreateTicket): JSX.Element => {
	const { search } = useLocation();
	const [department, setDepartment] = useState<DepartamentResponse | null>(null);
	const navigate = useNavigate();

	const history = [
		getRoutes(Screen.HOME),
		getRoutes(Screen.SELECT_DEPARTMENT),
		getRoutes(Screen.CREATE_TICKET),
	];

	const getDepartment = (): void => {
		const params = new URLSearchParams(search);
		const department = params.get('department');

		if (typeof department !== 'string') {
			navigate(getRoutes(Screen.SELECT_DEPARTMENT).link);
		}

		const newDepartment = department as string;

		departmentService
			.getDepartment({
				accessToken: user.accessToken as string,
				departmentId: parseInt(newDepartment),
			})
			.then((response) => {
				setDepartment(response.data);
			});
	};

	useEffect(() => {
		getDepartment();
	}, []);

	return (
		<Navbar user={user}>
			<>
				<HistoryNavigation history={history} />
				<Container>
					<Content>
						<ContainerTitle title={`Categoria do Chamado - ${department?.nome}`} />
						<Container>
							<Inputs department={department} user={user} />
						</Container>
					</Content>
				</Container>
			</>
		</Navbar>
	);
};

export const CreateTicket = connector(CreateTicketScreen);
