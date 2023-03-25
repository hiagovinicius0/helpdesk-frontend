import Moment from 'react-moment';
import 'moment/locale/pt-br';
import 'moment-timezone';
import { getStatus, TicketStatus } from '../StatusTicketEnum';

interface IStatus {
	userName: string;
	departmentName: string;
	status: TicketStatus;
	createdAt: string;
}

export const Status = ({ userName, departmentName, status, createdAt }: IStatus): JSX.Element => {
	return (
		<div className='bg-red-400 text-center m-1'>
			<h1>
				{userName} - {departmentName} alterou o status para {getStatus(status).text}
			</h1>
			<span className='text-xs -pt-1'>
				<Moment format='LLLL' tz='America/Sao_Paulo'>
					{createdAt}
				</Moment>
			</span>
		</div>
	);
};
