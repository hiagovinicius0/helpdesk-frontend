import { ReactNode } from 'react';

export const SidebarItemsMock: ISidebarItens[] = [
	{
		title: 'Chamados',
		to: '/',
		svg: (
			<>
				<path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
				<path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
			</>
		),
		onlyAdmin: false,
	},
	{
		title: 'Departamentos',
		to: '/departments',
		svg: (
			<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
		),
		onlyAdmin: true,
	},
	{
		title: 'Sair',
		to: '/logout',
		svg: (
			<path d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'></path>
		),
		onlyAdmin: false,
	},
];

export interface ISidebarItens {
	title: string;
	to: string;
	svg: ReactNode;
	onlyAdmin: boolean;
}
