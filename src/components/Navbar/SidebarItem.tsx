import { Link } from 'react-router-dom';
import { ISidebarItens } from 'src/utils/SidebarItems';

export const SidebarItem = ({ svg, title, to }: ISidebarItens): JSX.Element => {
	return (
		<li className='pt-2 h-12'>
			<Link
				to={to}
				className='flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-primary-color h-full'
			>
				<svg
					aria-hidden='true'
					className='w-6 h-6 transition duration-75'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					{svg}
				</svg>
				<span className='ml-3'>{title}</span>
			</Link>
		</li>
	);
};
