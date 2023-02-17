interface PProps {
	text: string;
}

export const P = ({ text }: PProps): JSX.Element => {
	return <p className='text-primary-color font-medium text-lg py-2 not-italic'>{text}</p>;
};
