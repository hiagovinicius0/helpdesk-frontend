import { ConnectedProps } from 'react-redux';
import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { connector } from 'src/store/store-config';
import { Container } from '../SelectDepartment/Container';
import { ContainerTitle } from './ContainerTitle';
import { Content } from './Content';
import { Inputs } from './Inputs';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ICreateTicket = PropsFromRedux;

const CreateTicketScreen = ({ user }: ICreateTicket): JSX.Element => {
	const history = [getRoutes(Screen.HOME).name, getRoutes(Screen.SELECT_DEPARTMENT).name];

	return (
		<Navbar user={user}>
			<>
				<HistoryNavigation history={history} />
				<Container>
					<Content>
						<ContainerTitle title='Categoria do Chamado - Sistemas' />
						<Container>
							<Inputs />
						</Container>
					</Content>
				</Container>
			</>
		</Navbar>
	);
};

export const CreateTicket = connector(CreateTicketScreen);
