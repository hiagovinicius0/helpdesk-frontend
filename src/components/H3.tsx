interface H3Props {
	title: string;
	style?: string;
}

export const H3 = ({ title, style }: H3Props): JSX.Element => {
	return <h3 className={`text-primary-color font-bold text-2xl py-2 ${style}`}>{title}</h3>;
};
