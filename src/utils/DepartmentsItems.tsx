export const DepartmentsItemsMock: IDepartment[] = [
	{
		icon: 'zondicons:network',
		title: 'Redes e Servidores',
	},
	{
		icon: 'mdi:code',
		title: 'Sistemas',
	},
	{
		icon: 'mingcute:computer-line',
		title: 'Infraestrutura',
	},
	{
		icon: 'mdi:shield-lock-outline',
		title: 'Segurança',
	},
	{
		icon: 'ph:coffee-bold',
		title: 'Outros',
	},
];

export interface IDepartment {
	title: string;
	icon: string;
}
