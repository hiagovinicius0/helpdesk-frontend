interface H4Props {
	title: string;
}

export const H4 = ({ title }: H4Props): JSX.Element => {
	return <h4 className='text-primary-color text-xl py-2 not-italic'>{title}</h4>;
};
