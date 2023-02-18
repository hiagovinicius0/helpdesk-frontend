import { Button } from 'src/components/Button';
import { H3 } from 'src/components/H3';
import { H4 } from 'src/components/H4';
import { InputText, InputTextIcon } from 'src/components/InputText';

export const FormContent = (): JSX.Element => {
	return (
		<div className='md:w-8/12 lg:w-5/12 lg:ml-20 pt-3 text-center pb-14'>
			<form>
				<H3 title='Acesse sua conta' />
				<H4 title='Faça login para iniciar a sua sessão' />
				<InputText icon={InputTextIcon.EMAIL} placeholder={'E-mail'} />
				<InputText icon={InputTextIcon.PASSWORD} placeholder={'Senha'} />
				<Button text={'ENTRAR'} />
			</form>
		</div>
	);
};
