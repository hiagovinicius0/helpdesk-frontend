interface IContainer {
	children: JSX.Element[];
}

export const Container = ({ children }: IContainer): JSX.Element => {
	return (
		<div className='container flex items-center flex-wrap h-full g-6 text-gray-800'>{children}</div>
	);
};
