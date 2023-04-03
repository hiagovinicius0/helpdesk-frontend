interface IContent {
	children: JSX.Element[] | JSX.Element;
	style?: string;
}

export const Content = ({ children, style }: IContent): JSX.Element => {
	return (
		<div className={`bg-background-gray-color w-full max-w-screen-lg pb-12 ${style}`}>
			{children}
		</div>
	);
};
