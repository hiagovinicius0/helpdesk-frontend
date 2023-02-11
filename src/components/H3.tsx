interface H3Props {
	title: string;
}

export const H3 = ({ title }: H3Props): JSX.Element => {
	return <h3 className='text-primary-color font-bold text-2xl py-2'>{title}</h3>;
};
