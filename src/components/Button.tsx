interface IButton {
	text: string;
}

export const Button = ({ text }: IButton): JSX.Element => {
	return (
		<button
			type='submit'
			className='inline-block px-7 py-3 bg-primary-color 
				text-white text-sm uppercase rounded-3xl shadow-md 
				hover:bg-fuchsia-900 hover:shadow-lg focus:bg-fuchsia-900
				focus:shadow-lg focus:outline-none focus:ring-0 
				active:bg-fuchsia-900 active:shadow-lg transition duration-150
				ease-in-out h-12 font-extrabold underline w-48
				'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
		>
			{text}
		</button>
	);
};