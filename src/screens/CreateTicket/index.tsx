import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { getRoutes, Screen } from 'src/routes/RoutesEnum';
import { Container } from '../SelectDepartment/Container';
import { ContainerTitle } from './ContainerTitle';
import { Content } from './Content';
import { Inputs } from './Inputs';

export const CreateTicket = (): JSX.Element => {
	const history = [getRoutes(Screen.HOME).name, getRoutes(Screen.SELECT_DEPARTMENT).name];

	return (
		<Navbar>
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
