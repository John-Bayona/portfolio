import { useRef, DOMAttributes } from 'react'
import Input from './Input'
import TextArea from './TextArea'

type PropType = { sendTo: string }
type submitEventType = {
    name: { value: string }
}
function ControlledForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit: DOMAttributes<HTMLFormElement>['onSubmit'] = (
        event
    ) => {
        event.preventDefault()
        if (!formRef.current) return
        const {
            name: name,
            phone: { value: phone },
            mail: { value: mail },
            business: { value: business },
            accepted: { value: accepted },
            message: { value: message },
        } = formRef.current
        const body = {
            name,
            phone,
            mail,
            business,
            accepted,
            message,
        }
        fetch('/api/formValidation', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phone,
                mail,
                business,
                accepted,
                message,
            }),
        })
    }

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='ali m-auto my-4 flex w-max flex-col flex-wrap content-center justify-center self-center'
                action='/api/formValidation'
                encType='text/plain'
                method='post'>
                <Input
                    name='name'
                    pattern='^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$'
                    placeholder=' Nombre y apellidos'
                />
                <Input
                    name='phone'
                    pattern='[0-9+]{9}'
                    placeholder='Teléfono'
                    type='tel'
                />
                <Input
                    name='mail'
                    pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.ñÑ]+)\.([a-zA-Z]{2,5})$'
                    placeholder=' Correo electrónico'
                />
                <Input name='business' placeholder='Empresa' />
                <TextArea name='message' placeholder=' Mensaje' />
                <div className=''>
                    <Input
                        name='accepted'
                        type='checkbox'
                        className='mr-2 w-auto p-1'
                        id='aviso'
                    />
                    <label htmlFor='aviso'>
                        Acepto el{' '}
                        <a href=''>Aviso legal y de protección de datos</a>
                    </label>
                </div>
                <button
                    className='mt-2 h-max w-max self-center rounded bg-blue-900 px-4 py-2 font-bold text-white'
                    type='submit'
                    value='enviar'>
                    Enviar
                </button>
            </form>
        </>
    )
}
export default ControlledForm
