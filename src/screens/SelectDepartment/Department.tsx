import { Icon } from '@iconify/react';
import { P } from 'src/components/P';
import { IDepartment } from 'src/utils/DepartmentsItems';

interface DepartmentProps {
	department: IDepartment;
}

export const Department = ({ department }: DepartmentProps): JSX.Element => {
	return (
		<button className='bg-department-color w-52 h-64 flex flex-col items-center'>
			<Icon icon={department.icon} className='text-primary-color text-7xl mt-16 ' />
			<P text={department.title} />
		</button>
	);
};
