import { H3 } from 'src/components/H3';
import { Navbar } from 'src/components/Navbar';
import { Departments } from './Departments';
import { Container } from './Container';
import { ConnectedProps } from 'react-redux';
import { connector } from 'src/store/store-config';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ISelectDepartment = PropsFromRedux;

const SelectDepartmentScreen = ({ user }: ISelectDepartment): JSX.Element => {
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
