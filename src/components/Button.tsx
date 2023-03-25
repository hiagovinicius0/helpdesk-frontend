interface IButton {
	text: string;
	style?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ text, style, onClick }: IButton): JSX.Element => {
	return (
		<button
			type='submit'
			className={`inline-block px-7 py-3 bg-primary-color 
				text-white text-sm rounded-3xl shadow-md 
				hover:bg-fuchsia-900 hover:shadow-lg focus:bg-fuchsia-900
				focus:shadow-lg focus:outline-none focus:ring-0 
				active:bg-fuchsia-900 active:shadow-lg transition duration-150
				ease-in-out h-12 font-extrabold underline w-48 ${style}
				`}
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
			onClick={(event): void => onClick(event)}
		>
			{text}
		</button>
	);
};
