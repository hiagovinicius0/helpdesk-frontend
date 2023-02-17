import { H3 } from 'src/components/H3';
import { Navbar } from 'src/components/Navbar';
import { Departments } from './Departments';
import { Container } from './Container';

export const SelectDepartment = (): JSX.Element => {
	return (
		<Navbar>
			<>
				<Container>
					<H3 title='Selecione o departamento do seu chamado' />
				</Container>
				<Departments />
			</>
		</Navbar>
	);
};
