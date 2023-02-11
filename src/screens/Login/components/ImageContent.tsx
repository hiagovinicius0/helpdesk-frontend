import helpdesk from 'src/assets/images/Login/helpdesk.png';

export const ImageContent = (): JSX.Element => {
	return (
		<div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
			<img src={helpdesk} className='md:h-screen' alt='HelpDesk' />
		</div>
	);
};
