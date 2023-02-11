import { List, UserCircle } from 'phosphor-react';
import { Span } from 'src/components/Span';
import { SidebarItems } from './SidebarItems';

interface INavbar {
	children: JSX.Element;
}

export const Navbar = ({ children }: INavbar): JSX.Element => {
	return (
		<>
			<nav className='fixed top-0 z-50 w-full bg-primary-color h-20 px-3 py-3 lg:px-5 lg:pl-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-start'>
						<button
							data-drawer-target='logo-sidebar'
							data-drawer-toggle='logo-sidebar'
							aria-controls='logo-sidebar'
							type='button'
							className='inline-flex items-center p-2 text-sm 
									text-white-color rounded-lg hover:bg-fuchsia-900
									h-11  mt-1'
						>
							<Span text='helpdesk' />
							<List className='w-6 h-6 ml-6 text-white' weight='fill' />
						</button>
					</div>
					<div className='flex items-center ml-3'>
						<button
							type='button'
							className='flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300'
							aria-expanded='false'
							data-dropdown-placement='bottom'
						>
							<Span text='id 333' className='pr-2 font-bold' />
							<UserCircle className='w-10 h-10 mt-1 text-white' weight='fill' />
						</button>
					</div>
				</div>
			</nav>
			<SidebarItems />

			<div className='p-4 sm:ml-64 mt-16 pt-5'>{children}</div>
		</>
	);
};
