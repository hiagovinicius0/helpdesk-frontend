export const DepartmentsItemsMock: IDepartment[] = [
	{
		id: 1,
		icon: 'zondicons:network',
		title: 'Redes e Servidores',
	},
	{
		id: 2,
		icon: 'mdi:code',
		title: 'Sistemas',
	},
	{
		id: 3,
		icon: 'mingcute:computer-line',
		title: 'Infraestrutura',
	},
	{
		id: 4,
		icon: 'mdi:shield-lock-outline',
		title: 'Segurança',
	},
	{
		id: 5,
		icon: 'ph:coffee-bold',
		title: 'Outros',
	},
];

export interface IDepartment {
	id: number;
	title: string;
	icon: string;
}
