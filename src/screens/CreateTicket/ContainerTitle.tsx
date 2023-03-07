interface IContainerTitle {
	title: string;
}

export const ContainerTitle = ({ title }: IContainerTitle): JSX.Element => {
	return (
		<div className={'bg-background-yellow-color h-14 m-3'}>
			<div className='flex justify-center content-center items-stretch py-4'>
				<p>{title}</p>
			</div>
		</div>
	);
};
