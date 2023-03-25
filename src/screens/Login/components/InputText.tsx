import { User, LockSimple } from 'phosphor-react';

export enum InputTextIcon {
	EMAIL = 'EMAIL',
	PASSWORD = 'PASSWORD',
}

interface IInputText {
	placeholder: string;
	icon: InputTextIcon;
	value: string;
	setValue: (value: string) => void;
}

export const InputText = ({ placeholder, icon, value, setValue }: IInputText): JSX.Element => {
	let iconComponent = <div></div>;

	if (icon === InputTextIcon.EMAIL) {
		iconComponent = (
			<>
				<input
					type='text'
					className='w-full w-455 h-16 bg-gray-color px-20 
					text-icon-color not-italic font-medium text-base border-0'
					placeholder={placeholder}
					value={value}
					onChange={(event): void => setValue(event.target.value)}
				/>
				<User className='absolute mr-2 w-10 text-icon-color mx-9' weight='fill' size={32} />
			</>
		);
	}

	if (icon === InputTextIcon.PASSWORD) {
		iconComponent = (
			<>
				<input
					type='password'
					className={'w-full w-455 h-16 bg-gray-color py-1 px-20 text-icon-color border-0'}
					placeholder={placeholder}
					style={{ inputSecurity: 'auto' }}
					value={value}
					onChange={(event): void => setValue(event.target.value)}
				/>
				<LockSimple className='absolute mr-2 w-10 text-icon-color mx-9' weight='fill' size={32} />
			</>
		);
	}

	return <div className='flex justify-start items-center relative mb-6 mx-4'>{iconComponent}</div>;
};
