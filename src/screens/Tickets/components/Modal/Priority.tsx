import { getPriority, TicketPriority } from '../PriorityTicketEnum';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import 'moment-timezone';

interface IPriority {
	userName: string;
	departmentName: string;
	priority: TicketPriority;
	createdAt: string;
}

export const Priority = ({
	userName,
	departmentName,
	priority,
	createdAt,
}: IPriority): JSX.Element => {
	return (
		<div className='bg-zinc-400 text-center m-1'>
			<h1>
				{userName} - {departmentName} alterou a prioridade para {getPriority(priority).text}
			</h1>
			<span className='text-xs -pt-1'>
				<Moment format='LLLL' tz='America/Sao_Paulo'>
					{createdAt}
				</Moment>
			</span>
		</div>
	);
};
