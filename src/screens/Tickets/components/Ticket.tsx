import { H3 } from 'src/components/H3';
import { Span } from 'src/components/Span';
import { getPriority } from './PriorityTicketEnum';
import { getStatus } from './StatusTicketEnum';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import 'moment-timezone';
import { TicketResponse } from 'src/services/response';
import { Content } from 'src/screens/CreateTicket/components/Content';

interface ITicket extends TicketResponse {
	showModal: (ticketId: string) => void;
}

export const Ticket = ({
	dtaInsercao,
	prioridade,
	ultimoStatus,
	titulo,
	showModal,
	id,
	ordem,
}: ITicket): JSX.Element => {
	const statusEnum = getStatus(ultimoStatus);
	const priorityEnum = getPriority(prioridade);

	return (
		<Content style='bg-gray-background-color pb-2 p-2 sm:p-8'>
			<div className='bg-white p-1 sm:p-2'>
				<div className='bg-card-color m-1 p-5 flex flex-col sm:flex-row m-4 p-5'>
					<div className='basis-3/4'>
						<H3 title={`#${ordem} - ${titulo}`} />
						<Span
							text={
								<Moment format='LLLL' tz='America/Sao_Paulo'>
									{dtaInsercao}
								</Moment>
							}
							className='text-icon-color normal-case'
						/>
					</div>
					<div className='flex flex-row-reverse pt-6'>
						<button
							className='bg-department-color border-2 border-inherit border-border-color shadow-md h-9 w-56 text-center'
							onClick={(): void => showModal(id)}
						>
							{statusEnum.text}
						</button>
						<div className={`h-8 w-8 ${priorityEnum.color} rounded-full mx-7`}></div>
					</div>
				</div>
			</div>
		</Content>
	);
};
