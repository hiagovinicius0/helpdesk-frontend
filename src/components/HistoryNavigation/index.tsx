import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Span } from '../Span';
import { RouteScreen } from 'src/routes/RoutesEnum';

interface HistoryNavigationProps {
	history: RouteScreen[];
}

export const HistoryNavigation = ({ history }: HistoryNavigationProps): JSX.Element => {
	return (
		<>
			{history.map((item, index) => {
				return (
					<Link to={item.link} key={index}>
						<div className='my-10 inline-flex'>
							{index !== 0 && (
								<Icon
									icon='material-symbols:play-arrow-rounded'
									className='text-icon-color text-4xl'
								/>
							)}
							{index === 0 && (
								<Icon icon='material-symbols:play-arrow-rounded' className='text-white text-4xl' />
							)}

							<Span
								key={index}
								text={item.name}
								className={'text-link-color normal-case text-base'}
							/>
						</div>
					</Link>
				);
			})}
		</>
	);
};
