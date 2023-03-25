export enum Screen {
	HOME,
	CREATE_TICKET,
	LOGIN,
	SELECT_DEPARTMENT,
	TICKETS,
	LOGOUT,
}
interface Route {
	link: string;
	name: string;
}

export const getRoutes = (screen: Screen): Route => {
	switch (screen) {
		case Screen.HOME:
			return { link: '/', name: 'Início' };
		case Screen.CREATE_TICKET:
			return { link: '/tickets/create', name: 'Criar Chamado' };
		case Screen.LOGIN:
			return { link: '/login', name: 'Login' };
		case Screen.SELECT_DEPARTMENT:
			return { link: '/tickets/select-department', name: 'Selecionar Departamento' };
		case Screen.TICKETS:
			return { link: '/tickets', name: 'Tickets' };
		case Screen.LOGOUT:
			return { link: '/logout', name: 'Sair' };
	}
};
