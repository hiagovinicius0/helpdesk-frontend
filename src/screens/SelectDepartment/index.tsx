import { H3 } from 'src/components/H3';
import { Navbar } from 'src/components/Navbar';
import { Container } from './components/Container';
import { PropsFromRedux, connector } from 'src/store/store-config';
import { Departments } from './components/Departments';

const SelectDepartmentScreen = ({ user }: PropsFromRedux): JSX.Element => {
	return (
		<Navbar user={user}>
			<>
				<Container>
					<H3 title='Selecione o departamento do seu chamado' />
				</Container>
				<Departments user={user} />
			</>
		</Navbar>
	);
};

export const SelectDepartment = connector(SelectDepartmentScreen);
