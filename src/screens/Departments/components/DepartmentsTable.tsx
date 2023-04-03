import { Icon } from '@iconify/react';
import { Button, Table } from 'flowbite-react';
import { DepartamentResponse } from 'src/services/response';

interface IDepartmentsTable {
	departments: DepartamentResponse[];
}

export const DepartmentsTable = ({ departments }: IDepartmentsTable): JSX.Element => {
	return (
		<Table hoverable={true} className='w-screen max-w-5xl' striped={true}>
			<Table.Head>
				<Table.HeadCell>ID</Table.HeadCell>
				<Table.HeadCell>Nome</Table.HeadCell>
				<Table.HeadCell>Situação</Table.HeadCell>
				<Table.HeadCell></Table.HeadCell>
			</Table.Head>
			<Table.Body className='divide-y'>
				{departments.map((item, index) => {
					return (
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800' key={index}>
							<Table.Cell>{item.id}</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{item.nome}
							</Table.Cell>
							<Table.Cell>{item.ativo ? 'Ativo' : 'Inativo'}</Table.Cell>
							<Table.Cell>
								<Button color={'warning'} size='xs'>
									<Icon icon='mdi:pencil' className='text-white text-[20px] ' />
								</Button>
							</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table>
	);
};
