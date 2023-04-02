import { useState } from 'react';
import { Button } from 'src/components/Button';
import { Input, InputType } from 'src/components/Inputs';

export const Inputs = (): JSX.Element => {
	const [subject, setSubject] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [degree, setDegree] = useState<string>('');

	const optionsSelect = [
		{ value: '', text: 'Selecione' },
		{ value: '1', text: 'Baixo' },
		{ value: '2', text: 'Médio' },
		{ value: '3', text: 'Alto' },
	];

	const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault();
	};

	return (
		<div>
			<Input span='Assunto' type={InputType.TEXT} value={subject} setValue={setSubject} />
			<Input
				span='Descrição'
				type={InputType.TEXTAREA}
				value={description}
				setValue={setDescription}
			/>
			<Input
				span='Grau de Necessidade'
				type={InputType.SELECT}
				selectOptions={{
					options: optionsSelect,
				}}
				value={degree}
				setValue={setDegree}
			/>
			<div className='flex justify-center pt-3'>
				<Button text='Abrir Chamado' onClick={onClick} />
			</div>
		</div>
	);
};
