import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { formControl, formErrors } from 'pages/telesuscription';

interface Props{
    formControl : Control<formControl, any>;
    formErrors: FieldErrors<formErrors>;
    alcohol: boolean;
    alcoholFrecuency: number | null;
}

const Alcohol: FC<Props> = ({formControl, formErrors, alcohol, alcoholFrecuency}) => {
    
    const getTextConsumptions = () => {
        switch(alcoholFrecuency){
            case 1: return ' Consumiciones diarias'                
            case 2: return ' Consumiciones semanales'
            case 3: return ' Consumiciones mensuales'
        }        
    }

    return (
        <Card className='p-shadow-4' style={{background: 'var(--surface-100)'}}>
            <div className='flex flex-column gap-4 w-12'>
                <Controller
                    name="alcohol"
                    control={formControl}                                        
                    render={({ field, fieldState }) => (
                        <>
                            <div>
                                <div className='flex flex-row gap-2 align-items-center'>                                                    
                                    <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                    <label htmlFor={field.name}>¿Consume Alcohol?</label>
                                </div>             
                            </div>
                        </>
                    )}
                />                                                                                                 
                { alcohol && 
                <div className='flex flex-column mt-2 gap-4 w-12 flex-wrap'>
                    <Controller
                        name="acoholFrecuency"
                        control={formControl}
                        rules={{ required: alcohol && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12">
                                        <Dropdown
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'Diariamente', value: 1}, {label: 'Semanalmente', value: 2}, {label: 'Mensualmente', value: 3}, {label: 'Esporádicamente', value: 4}]}
                                            focusInputRef={field.ref}
                                            onChange={(e) => field.onChange(e.value)}
                                            className={`w-12 ${fieldState.error && 'p-invalid'}`}
                                        />
                                        <label htmlFor={field.name}>Frecuencia</label>
                                    </span>
                                    {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                </div>                                                             
                            </>
                        )}
                    />
                    { alcoholFrecuency !== 4 && alcoholFrecuency && <div className='flex flex-column gap-4'>
                        <Controller
                            name="alcoholType"
                            control={formControl}
                            rules={{ required: alcohol && 'Frecuencia es requerido' }}
                            render={({ field, fieldState }) => (
                                <>                                                
                                    <div className='flex w-12'>
                                        <span className="p-float-label w-12">
                                            <MultiSelect 
                                                id={field.name} 
                                                name="value" 
                                                value={field.value} 
                                                options={
                                                    [{name: 'Cerveza', value: 1}, {name: 'Vino', value: 2}, {name: 'Bebidas Espirituosas', value: 3} ]
                                                } 
                                                onChange={(e) => field.onChange(e.value)} 
                                                optionLabel="name" 
                                                maxSelectedLabels={3} 
                                                className='w-12'
                                                display="chip"
                                            />
                                            <label htmlFor={field.name}>Tipo de Alcohol</label>
                                        </span>
                                        {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                    </div>                                                             
                                </>
                            )}
                        />  
                        <Controller
                            name="alcoholAmount"
                            control={formControl}
                            rules={{ required: alcohol && 'Frecuencia es requerido' }}
                            render={({ field, fieldState }) => (
                                <>                                                
                                    <div className='flex w-12'>
                                        <span className="p-float-label">
                                            <InputNumber 
                                                suffix={getTextConsumptions()}
                                                id={field.name} 
                                                value={field.value} 
                                                className={`${fieldState.error && 'p-invalid' }`} 
                                                onChange={(e) => field.onChange(e.value)}                                     
                                            />
                                            <label htmlFor={field.name}>{getTextConsumptions()}</label>
                                        </span>
                                        {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                    </div>                                                             
                                </>
                            )}
                        />  
                    </div>  } 
                    
                </div>}
            </div>
        </Card>
    )
}

export default Alcohol