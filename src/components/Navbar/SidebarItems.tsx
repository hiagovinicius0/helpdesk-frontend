import { SidebarItemsMock } from 'src/utils/SidebarItems';
import { SidebarItem } from './SidebarItem';
import { UserStore } from 'src/store/stores';

interface ISidebarItems {
	user: UserStore;
}

export const SidebarItems = ({ user }: ISidebarItems): JSX.Element => {
	return (
		<aside
			id='logo-sidebar'
			className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0'
			aria-label='Sidebar'
		>
			<div className='h-full px-3 pb-4 overflow-y-auto bg-primary-color text-white-color'>
				<ul className='space-y-2'>
					{SidebarItemsMock.map((item, index) => {
						if (!item.onlyAdmin || (item.onlyAdmin && user.role === 1))
							return <SidebarItem {...item} key={index} />;
					})}
				</ul>
			</div>
		</aside>
	);
};
