import { DepartmentsItemsMock } from 'src/utils/DepartmentsItems';
import { Department } from './Department';

export const Departments = (): JSX.Element => {
	return (
		<div className='flex flex-col items-center grid-cols-3 flex-wrap'>
			<div className='flex space-x-2.5 space-y-0 pr-4'>
				{DepartmentsItemsMock.map((item, index) => {
					return <Department department={item} key={index} />;
				})}
			</div>
		</div>
	);
};
