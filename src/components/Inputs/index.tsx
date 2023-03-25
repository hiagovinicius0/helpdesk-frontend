export enum InputType {
	TEXT = 'TEXT',
	TEXTAREA = 'TEXTAREA',
	SELECT = 'SELECT',
}

interface IOption {
	value: string;
	text: string;
}

interface ISelectOptions {
	defaultValue: string;
	options: IOption[];
}

interface IInputs {
	span: string;
	type: InputType;
	selectOptions?: ISelectOptions;
	value: string;
	setValue: (text: string) => void;
}

export const Input = ({ span, type, selectOptions, value, setValue }: IInputs): JSX.Element => {
	let input = (
		<input
			className='w-72 sm:w-80 md:w-96 bg-white-color border border-border-input-color'
			value={value}
			onChange={(event): void => setValue(event.target.value)}
		/>
	);

	if (type === InputType.TEXT) {
		input = (
			<>
				<input
					className='w-72 sm:w-80 md:w-96 bg-white-color border border-border-input-color'
					value={value}
					onChange={(event): void => setValue(event.target.value)}
				/>
			</>
		);
	}

	if (type === InputType.TEXTAREA) {
		input = (
			<>
				<textarea
					className='w-72 sm:w-80 md:w-96 bg-white-color h-40 resize-none border border-border-input-color'
					value={value}
					onChange={(event): void => setValue(event.target.value)}
				></textarea>
			</>
		);
	}

	if (type === InputType.SELECT) {
		const selectOp = selectOptions as ISelectOptions;
		input = (
			<select
				className='w-72 sm:w-80 md:w-96 bg-white-color resize-none border border-border-input-color'
				defaultValue={selectOp.defaultValue}
				value={value}
				onChange={(event): void => setValue(event.target.value)}
			>
				{selectOp.options.map((option, index) => {
					return (
						<option value={option.value} key={index}>
							{option.text}
						</option>
					);
				})}
			</select>
		);
	}

	return (
		<div className='flex space-x-6 m-2'>
			<span className='w-20'>{span}</span>
			{input}
		</div>
	);
};
