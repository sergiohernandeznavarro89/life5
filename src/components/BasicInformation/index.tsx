import { formControl, formErrors } from 'pages/telesuscription';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form';

interface Props{
    formControl : Control<formControl, any>;
    formErrors: FieldErrors<formErrors>;
}

const BasicInformation: FC<Props> = ({formControl, formErrors}) => {
    
  return (
    <div className='flex flex-column gap-3 mt-5'>
                            <span className='text-primary'>
                                Información básica
                            </span>
                            <div className='flex flex-column mt-2 gap-3 w-12'>
                                <div className='flex flex-row w-7 justify-content-between'>
                                    <Controller
                                        name="lifeInsurance"
                                        control={formControl}
                                        rules={{ required: 'Fallecimiento es requerido' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <div>
                                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                                        <InputSwitch disabled inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                                        <label htmlFor={field.name}>Fallecimiento por cualquier causa</label>
                                                    </div>             
                                                    {formErrors.lifeInsurance && <small className="p-error">{formErrors.lifeInsurance.message}</small>}                       
                                                </div>
                                            </>
                                        )}
                                    />                                
                                    <Controller
                                        name="ipa"
                                        control={formControl}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <div>
                                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                                        <InputSwitch inputId={field.name} checked={field.value} inputRef={field.ref} onChange={(e) => field.onChange(e.value)} />                                                    
                                                        <label htmlFor={field.name}>Incapacidad permanente absoluta</label>
                                                    </div>             
                                                </div>
                                            </>
                                        )}
                                    />                                
                                </div>
                                <div className='flex flex-row gap-4 flex-wrap'>
                                    <Controller
                                        name="name"
                                        control={formControl}
                                        rules={{ required: 'Nombre es requerido' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <div>
                                                    <span className="p-float-label">
                                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                        <label htmlFor={field.name}>Nombre</label>
                                                    </span>
                                                    {formErrors.name && <small className="p-error">{formErrors.name.message}</small>}                       
                                                </div>             
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="surname"
                                        control={formControl}
                                        rules={{ required: 'Apellidos son requeridos' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <div>
                                                    <span className="p-float-label">
                                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                        <label htmlFor={field.name}>Apellidos</label>
                                                    </span>
                                                    {formErrors.surname && <small className="p-error">{formErrors.surname.message}</small>}                       
                                                </div>                     
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="dni"
                                        control={formControl}
                                        rules={{ required: 'DNI es requerido' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <div>
                                                    <span className="p-float-label">
                                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                        <label htmlFor={field.name}>DNI</label>
                                                    </span>
                                                    {formErrors.dni && <small className="p-error">{formErrors.dni.message}</small>}                       
                                                </div>
                                            </>
                                        )}
                                    />

                                    <Controller
                                        name="insuredCapital"
                                        control={formControl}
                                        rules={{ required: 'Capital es requerido' }}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <>
                                                    <div>
                                                        <span className="p-float-label">
                                                            <InputNumber suffix=' €' id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} inputClassName={classNames({ 'p-invalid': fieldState.error })} />
                                                            <label htmlFor={field.name}>Capital</label>
                                                        </span>
                                                        {formErrors.insuredCapital && <small className="p-error">{formErrors.insuredCapital.message}</small>}
                                                    </div>
                                                </>
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
  )
}

export default BasicInformation