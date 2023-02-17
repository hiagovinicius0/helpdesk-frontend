interface IContainer {
	children: JSX.Element[] | JSX.Element;
}

export const Container = ({ children }: IContainer): JSX.Element => {
	return <div className='flex justify-center pt-8'>{children}</div>;
};
