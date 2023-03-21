import { Button, Modal } from 'flowbite-react';

export const ModalView = (): JSX.Element => {
	return (
		<>
			<Modal.Header>Terms of Service</Modal.Header>
			<Modal.Body>
				<div className='bg-slate-400 rounded-md p-3 my-4 w-fit'>
					<h1 className='pb-2'>Benedito Honorato - TI</h1>
					<p className='text-base leading-relaxed  dark:text-gray-400 text-teal-900'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industrys standard dummy text ever since the 1500s, when an unknown printer
						took a galley of type and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting, remaining
						essentially unchanged. It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<span className='text-xs -pt-1'>Ter, 21 de março de 2023</span>
				</div>

				<div className='bg-slate-400 rounded-md p-3 my-4 text-right w-fit ml-auto'>
					<h1 className='pb-2'>Benedito Honorato - TI</h1>
					<p className='text-base leading-relaxed dark:text-gray-400 text-teal-900'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industrys standard dummy text ever since the 1500s, when an unknown printer
						took a galley of type and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting, remaining
						essentially unchanged. It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing
						software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<span className='text-xs -pt-1'>Ter, 21 de março de 2023</span>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button>Responder</Button>
			</Modal.Footer>
		</>
	);
};
