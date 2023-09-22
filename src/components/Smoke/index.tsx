import { formControl, formErrors } from 'pages/telesuscription';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form';

interface Props{
    formControl : Control<formControl, any>;
    formErrors: FieldErrors<formErrors>;    
    smoke: boolean;
}

const Smoke: FC<Props> = ({formControl, formErrors, smoke}) => {
  return (
    <Card className='p-shadow-4' style={{background: 'var(--surface-100)'}}>
        <div className='flex flex-column gap-3'>
            <Controller
                name="smoke"
                control={formControl}                                        
                render={({ field, fieldState }) => (
                    <>
                        <div>
                            <div className='flex flex-row gap-2 align-items-center'>                                                    
                                <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                <label htmlFor={field.name}>¿Es Fumador?</label>
                            </div>             
                        </div>
                    </>
                )}
            />                                                                                                 
            { smoke && <div className='flex flex-row gap-4 flex-wrap mt-3'>
                <Controller
                    name="smokeAmmount"
                    control={formControl}
                    rules={{ required: smoke && 'Cantidad es requerido' }}
                    render={({ field, fieldState }) => (
                        <>                                                
                            <div>
                                <span className="p-float-label">
                                    <InputNumber suffix=' al día' id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
                                    <label htmlFor={field.name}>Cantidad diaria</label>
                                </span>
                                {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                            </div>                                                             
                        </>
                    )}
                />                                    
            </div>}
        </div>   
    </Card>
  )
}

export default Smoke