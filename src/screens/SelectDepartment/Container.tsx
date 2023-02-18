interface IContainer {
	children: JSX.Element[] | JSX.Element;
	style?: string;
}

export const Container = ({ children, style }: IContainer): JSX.Element => {
	return <div className={`flex justify-center pt-8 ${style}`}>{children}</div>;
};
