import { Button } from 'src/components/Button';
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
					<div className='bg-background-gray-color w-full max-w-screen-lg pb-12'>
						<div className='bg-background-yellow-color h-14 m-3'>
							<div className='flex justify-center content-center items-stretch py-4'>
								<p>Categoria do Chamado - Sistemas</p>
							</div>
						</div>
						<Container>
							<div>
								<div className='flex space-x-6 m-2'>
									<span className='w-20'>Assunto</span>
									<input className='w-72 sm:w-80 md:w-96 bg-white-color border border-border-input-color' />
								</div>
								<div className='flex space-x-6 m-2'>
									<span className='w-20'>Descrição</span>
									<textarea className='w-72 sm:w-80 md:w-96 bg-white-color h-40 resize-none border border-border-input-color'></textarea>
								</div>
								<div className='flex space-x-6 m-2'>
									<span className='w-20'>Grau de Necessidade</span>
									<select
										className='w-72 sm:w-80 md:w-96 bg-white-color resize-none border border-border-input-color'
										defaultValue={''}
									>
										<option value=''>Selecione</option>
										<option value={1}>Baixo</option>
										<option value={2}>Médio</option>
										<option value={3}>Alto</option>
									</select>
								</div>
								<div className='flex justify-center pt-3'>
									<Button text='Abrir Chamado' />
								</div>
							</div>
						</Container>
					</div>
				</Container>
			</>
		</Navbar>
	);
};
