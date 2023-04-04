import { Icon } from '@iconify/react';
import { Button, Modal } from 'flowbite-react';
import { Input, InputType } from 'src/components/Inputs';
import { departmentService } from 'src/services/department-service';
import { DepartamentResponse } from 'src/services/response';
import { UserStore } from 'src/store/stores';

export enum ModalType {
	CREATE = 'CREATE',
	UPDATE = 'UPDATE',
}

interface IModalView {
	departmentModal: DepartamentResponse | null;
	name: string;
	setName: (name: string) => void;
	icon: string;
	setIcon: (icon: string) => void;
	active: string;
	setActive: () => void;
	getDepartments: () => void;
	user: UserStore;
	setShow: (show: boolean) => void;
	modalType: ModalType;
}

export const ModalView = ({
	departmentModal,
	name,
	setName,
	icon,
	setIcon,
	active,
	setActive,
	getDepartments,
	user,
	setShow,
	modalType,
}: IModalView): JSX.Element => {
	const createDepartment = (): void => {
		departmentService
			.createDepartment({
				accessToken: user.accessToken as string,
				icone: icon,
				nome: name,
			})
			.then(() => {
				getDepartments();
				setShow(false);
			});
	};

	const modifyDepartment = (): void => {
		departmentService
			.updateDepartment({
				accessToken: user.accessToken as string,
				ativo: active === 'true' ? true : false,
				departmentId: departmentModal!.id,
				icone: icon,
				nome: name,
			})
			.then(() => {
				getDepartments();
				setShow(false);
			});
	};

	return (
		<>
			<Modal.Header>
				{modalType === ModalType.CREATE ? 'Criar' : 'Editar'} Departamento
			</Modal.Header>
			<Modal.Body className='overflow-auto max-h-96'>
				<>
					<Input span='Nome' setValue={setName} type={InputType.TEXT} value={name} />
					<Input span='Icone' setValue={setIcon} type={InputType.TEXT} value={icon} />
					{modalType === ModalType.UPDATE && (
						<Input span='Ativo' setValue={setActive} type={InputType.CHECKBOX} value={active} />
					)}
				</>
				<Icon icon={icon} className='text-primary-color text-7xl mt-16 ' />
			</Modal.Body>
			<Modal.Footer>
				<Button
					onClick={(): void => {
						modalType === ModalType.CREATE ? createDepartment() : modifyDepartment();
					}}
				>
					Enviar
				</Button>
			</Modal.Footer>
		</>
	);
};
