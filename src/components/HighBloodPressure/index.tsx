import { Card } from "primereact/card"
import { InputSwitch } from "primereact/inputswitch";
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { formControl, formErrors } from 'pages/telesuscription';
import { FC } from "react";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";

interface Props{
    formControl : Control<formControl, any>;
    formErrors: FieldErrors<formErrors>;
    bloodPressure: boolean;
    whenHighBlood: number | null;
    treatmentBloodPressureQuestion: boolean;
    hipertensiveCrisisQuestion: boolean;
    hipertensiveCrisisRequest: boolean;
    ecgQuestion: boolean;
    cholesterol: boolean;
    triglycerides: boolean;
}

const HighBloodPressure: FC<Props> = ({formControl, formErrors, bloodPressure, whenHighBlood, 
    treatmentBloodPressureQuestion, hipertensiveCrisisQuestion, hipertensiveCrisisRequest,
    ecgQuestion, cholesterol, triglycerides}) => {
  return (
    <Card className='p-shadow-4' style={{background: 'var(--surface-100)'}}>
        <div className='flex flex-column gap-4 w-12'>
            <Controller
                name="bloodPressure"
                control={formControl}                                        
                render={({ field, fieldState }) => (
                    <>
                        <div>
                            <div className='flex flex-row gap-2 align-items-center'>                                                    
                                <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                <label htmlFor={field.name}>¿Tiene o ha tenido la tensión arterial alta?</label>
                            </div>             
                        </div>
                    </>
                )}
            />                                                                                                 
            { bloodPressure && 
                <div className='flex flex-column mt-2 gap-4 w-12 flex-wrap'>
                    <Controller
                        name="whenHighBlood"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'La he tenido alta en el pasado', value: 1}, {label: 'La tengo alta', value: 2}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Tensión arterial</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />
                    <Controller
                        name="frecuencyHighBlood"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Hace menos de un mes', value: 1}, {label: 'Hace más de un mes', value: 2}, {label: 'Hace menos de un año', value: 3}, {label: 'Hace más de un año', value: 4}, {label: 'Hace más de cinco años', value: 5}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>{whenHighBlood === 1 ? 'Cuando' : 'Fecha diagnóstico' }</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />

                    <Controller
                        name="bloodPressureLevel"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Entre 120 mmHg y 129 mmHg / Menos de 80 mmHg', value: 1}, {label: 'Entre 130 mmHg y 139 mmHg / Entre 80 mmHg y 89 mmHg', value: 2}, {label: '140 mmHg o menos / 90 mmHg o más', value: 3}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Niveles</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />
                    <Controller
                        name="treatmentBloodPressureQuestion"
                        control={formControl}                                        
                        render={({ field, fieldState }) => (
                            <>
                                <div>
                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                        <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                        <label htmlFor={field.name}>¿Sigue algún tratamiento?</label>
                                    </div>             
                                </div>
                            </>
                        )}
                    />   
                    {treatmentBloodPressureQuestion && <Controller
                        name="treatmentBloodPressure"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12 ml-5">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Benazepril', value: 1}, {label: 'Captopril', value: 2}, {label: 'Enalapril', value: 3}, {label: 'Fosinopril ', value: 4}, {label: 'Dieta', value: 5},, {label: 'Otros...', value: 6}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Tratamiento</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />}

                    <Controller
                        name="hipertensiveCrisisQuestion"
                        control={formControl}                                        
                        render={({ field, fieldState }) => (
                            <>
                                <div>
                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                        <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                        <label htmlFor={field.name}>¿Ha tenido alguna crisis hipertensiva o repercusión sistemática?</label>
                                    </div>             
                                </div>
                            </>
                        )}
                    />   
                    {
                        hipertensiveCrisisQuestion && <Controller
                            name="hipertensiveCrisisRequest"
                            control={formControl}                                        
                            render={({ field, fieldState }) => (
                                <>
                                    <div>
                                        <div className='flex flex-row gap-2 align-items-center ml-5'>                                                    
                                            <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={`${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.value)} />                                                    
                                            <label htmlFor={field.name}>¿Ha sido hospitalizado/Atendido en urgencias por ello?</label>
                                        </div>             
                                    </div>
                                </>
                            )}
                        />
                    }
                    {
                        hipertensiveCrisisRequest && <Controller
                            name="hipertensiveCrisisSimptons"
                            control={formControl}
                            rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                            render={({ field, fieldState }) => (
                                <>                                                
                                    <div className='flex w-12'>                                        
                                        <span className="p-float-label w-12 ml-5">
                                            <Dropdown
                                                showClear
                                                id={field.name}
                                                value={field.value}
                                                optionLabel="label"                                                            
                                                options={[{label: 'Problemas de visión', value: 1}, {label: 'Dolor de cabeza', value: 2}, {label: 'Palpitaciones', value: 3}, {label: 'Problemas del sistema urinario', value: 4}, {label: 'Otros...', value: 5},]}
                                                focusInputRef={field.ref}
                                                onChange={(e) => field.onChange(e.value)}
                                                className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                            />
                                            <label htmlFor={field.name}>¿Qué síntomas le ha causado la crisis hipertensiva?</label>
                                        </span>
                                        {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                    </div>                                                             
                                </>
                            )}
                        />   
                    }
                    <Controller
                        name="ecgQuestion"
                        control={formControl}                                        
                        render={({ field, fieldState }) => (
                            <>
                                <div>
                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                        <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                        <label htmlFor={field.name}>¿Le han realizado algún electrocardiograma?</label>
                                    </div>             
                                </div>
                            </>
                        )}
                    />   
                    {
                        ecgQuestion && <Controller
                            name="ecgRequest"
                            control={formControl}                                                                    
                            render={({ field, fieldState }) => (                                
                                <>
                                    <div>
                                        <div className='ml-5 flex flex-row gap-2 align-items-center'>                                                    
                                            <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={`${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.value)} />                                                    
                                            <label htmlFor={field.name}>¿Los valores del electrocardiograma son normales?</label>
                                        </div>             
                                    </div>
                                </>
                            )}
                        />
                    }

                    
                    
                    
                    
                    <Controller
                        name="cholesterol"
                        control={formControl}                                        
                        render={({ field, fieldState }) => (
                            <>
                                <div>
                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                        <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                        <label htmlFor={field.name}>¿Colesterol?</label>
                                    </div>             
                                </div>
                            </>
                        )}
                    />   
                    {cholesterol && <Controller
                        name="cholesterolLevel"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12 ml-5">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Menos de 200mg/ld', value: 1}, {label: 'Entre 200 y 239 mg/ld', value: 2}, {label: '240mg/ld o más', value: 3}, {label: 'No lo se', value: 4}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Niveles</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />}

                    <Controller
                        name="triglycerides"
                        control={formControl}                                        
                        render={({ field, fieldState }) => (
                            <>
                                <div>
                                    <div className='flex flex-row gap-2 align-items-center'>                                                    
                                        <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                        <label htmlFor={field.name}>¿Triglicéridos?</label>
                                    </div>             
                                </div>
                            </>
                        )}
                    />   
                    {triglycerides && <Controller
                        name="triglyceridesLevel"
                        control={formControl}
                        rules={{ required: bloodPressure && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12 ml-5">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Menos de 150mg/dl', value: 1}, {label: 'Entre 150 y 199mg/dl', value: 2}, {label: 'Entre 200 y 499mg/dl', value: 3}, {label: 'No lo se', value: 4}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Niveles</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />}
                </div>
            }
        </div>
    </Card>
  )
}

export default HighBloodPressure