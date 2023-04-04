export enum InputType {
	TEXT = 'TEXT',
	TEXTAREA = 'TEXTAREA',
	SELECT = 'SELECT',
	CHECKBOX = 'CHECKBOX',
}

interface IOption {
	value: string;
	text: string;
}

interface ISelectOptions {
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
			className='max-w-288 w-full md:w-96 bg-white-color border border-border-input-color'
			value={value}
			onChange={(event): void => setValue(event.target.value)}
		/>
	);

	if (type === InputType.TEXT) {
		input = (
			<>
				<input
					className='max-w-288 w-full md:w-96 bg-white-color border border-border-input-color'
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
					className='max-w-288 w-full sm:w-80 md:w-96 bg-white-color h-40 resize-none border border-border-input-color'
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
				className='max-w-288 w-full md:w-96 bg-white-color resize-none border border-border-input-color'
				value={value}
				onChange={(event): void => {
					setValue(event.target.value);
				}}
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

	if (type === InputType.CHECKBOX) {
		input = (
			<>
				<input
					type='checkbox'
					checked={Boolean(value === 'true' ? true : false)}
					onChange={(): void => setValue(value.toString())}
				></input>
			</>
		);
	}

	return (
		<div className='flex space-x-6 m-2'>
			<span className='w-20'>{span}</span>
			{input}
		</div>
	);
};
