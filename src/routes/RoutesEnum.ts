export enum Screen {
	HOME,
	CREATE_TICKET,
	LOGIN,
	SELECT_DEPARTMENT,
	TICKETS,
	LOGOUT,
}
export interface RouteScreen {
	link: string;
	name: string;
	screen: number;
}

const routes = [
	{
		screen: Screen.HOME,
		link: '/',
		name: 'Início',
	},
	{
		screen: Screen.CREATE_TICKET,
		link: '/tickets/create',
		name: 'Criar Chamado',
	},
	{
		screen: Screen.LOGIN,
		link: '/login',
		name: 'Login',
	},
	{
		screen: Screen.SELECT_DEPARTMENT,
		link: '/tickets/select-department',
		name: 'Selecionar Departamento',
	},
	{
		screen: Screen.TICKETS,
		link: '/tickets',
		name: 'Tickets',
	},
	{
		screen: Screen.LOGOUT,
		link: '/',
		name: 'Sair',
	},
];

export const getRoutes = (screen: Screen): RouteScreen => {
	return routes.find((route) => route.screen === screen) as RouteScreen;
};
