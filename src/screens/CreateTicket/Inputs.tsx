import { Button } from 'src/components/Button';
import { Input, InputType } from 'src/components/Inputs';

export const Inputs = (): JSX.Element => {
	const optionsSelect = [
		{ value: '', text: 'Selecione' },
		{ value: '1', text: 'Baixo' },
		{ value: '2', text: 'Médio' },
		{ value: '3', text: 'Alto' },
	];

	return (
		<div>
			<Input span='Assunto' type={InputType.TEXT} />
			<Input span='Descrição' type={InputType.TEXTAREA} />
			<Input
				span='Grau de Necessidade'
				type={InputType.SELECT}
				selectOptions={{
					defaultValue: '',
					options: optionsSelect,
				}}
			/>
			<div className='flex justify-center pt-3'>
				<Button text='Abrir Chamado' />
			</div>
		</div>
	);
};
