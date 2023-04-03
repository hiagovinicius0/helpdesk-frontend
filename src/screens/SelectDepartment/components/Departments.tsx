import { Department } from './Department';
import { useNavigate } from 'react-router-dom';
import { Screen, getRoutes } from 'src/routes/RoutesEnum';
import { UserStore } from 'src/store/stores';
import { departmentService } from 'src/services/department-service';
import { useEffect, useState } from 'react';
import { DepartamentResponse } from 'src/services/response';

interface IDepartment {
	user: UserStore;
}

export const Departments = ({ user }: IDepartment): JSX.Element => {
	const [departments, setDepartments] = useState<DepartamentResponse[]>([]);
	const navigate = useNavigate();

	const onClickCreateTicket = (departmentId: number): void => {
		navigate({
			pathname: getRoutes(Screen.CREATE_TICKET).link,
			search: `?department=${departmentId}`,
		});
	};

	const getDepartments = (): void => {
		departmentService
			.getDepartments({ accessToken: user.accessToken as string })
			.then((response) => {
				setDepartments(response.data);
			});
	};

	useEffect(() => {
		getDepartments();
	}, []);

	return (
		<div className='flex flex-col items-center grid-cols-3 flex-wrap'>
			<div className='flex space-x-2.5 space-y-0 pr-4'>
				{departments.map((item, index) => {
					return (
						<Department
							department={{ icon: item.icone, id: item.id, title: item.nome }}
							key={index}
							onClickCreateTicket={onClickCreateTicket}
						/>
					);
				})}
			</div>
		</div>
	);
};
