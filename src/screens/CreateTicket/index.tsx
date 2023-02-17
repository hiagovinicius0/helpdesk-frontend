import { HistoryNavigation } from 'src/components/HistoryNavigation';
import { Navbar } from 'src/components/Navbar';
import { Container } from '../SelectDepartment/Container';

export const CreateTicket = (): JSX.Element => {
	const history = ['Início', 'Criar Chamado'];

	return (
		<Navbar>
			<>
				<HistoryNavigation history={history} />
				<Container>
					<div className='bg-background-gray-color w-full max-w-screen-lg h-96'>
						<div className='bg-background-yellow-color h-14 m-3'>
							<Container>
								<p className='content-center'>Categoria do Chamado - Sistemas</p>
							</Container>
						</div>
						<Container>
							<div>
								<div className='flex space-x-6'>
									<span>Assunto</span>
									<input></input>
								</div>
								<div className='flex  space-x-6'>
									<span>Descrição</span>
									<textarea></textarea>
								</div>
								<button className='flex self-end'>Abrir Chamado</button>
							</div>
						</Container>
					</div>
				</Container>
			</>
		</Navbar>
	);
};
