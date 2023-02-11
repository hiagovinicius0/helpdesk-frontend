interface ISpan {
	text: string;
	className?: string;
}

export const Span = ({ text, className }: ISpan): JSX.Element => {
	return (
		<span className={`uppercase text-white-color text-xl py-2 not-italic pt-2 ${className}`}>
			{text}
		</span>
	);
};
