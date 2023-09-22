import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { formControl, formErrors } from 'pages/telesuscription';
import { Card } from 'primereact/card';

interface Props{
    formControl : Control<formControl, any>;
    formErrors: FieldErrors<formErrors>;
    drugs: boolean;
    drugsFrecuency: number | null;
}

const Drugs: FC<Props> = ({formControl, formErrors, drugs, drugsFrecuency}) => {
    
    const drugTypes= [
        {value: 1, name: 'Cannabis'},
        {value: 2, name: 'Cocaína'},
        {value: 3, name: 'Alucinógenos'},
        {value: 4, name: 'Drogas Sintéticas'},
        {value: 5, name: 'Heroína'},
        {value: 6, name: 'Otros...'},
    ]

    const getTextConsumptions = () => {
        switch(drugsFrecuency){
            case 2: return ' Consumiciones diarias'                
            case 3: return ' Consumiciones semanales'
            case 4: return ' Consumiciones mensuales'
            default: return 'Consumiciones'
        }        
    }

    return (
        <Card className='p-shadow-4' style={{background: 'var(--surface-100)'}}>
            <div className='flex flex-column gap-4 w-12'>
                <Controller
                    name="drugs"
                    control={formControl}                                        
                    render={({ field, fieldState }) => (
                        <>
                            <div>
                                <div className='flex flex-row gap-2 align-items-center'>                                                    
                                    <InputSwitch id={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />                                                    
                                    <label htmlFor={field.name}>¿Consume o a consumido drogas?</label>
                                </div>             
                            </div>
                        </>
                    )}
                />                                                                                                 
                { drugs && 
                <div className='flex flex-column mt-2 gap-4 w-12 flex-wrap'>
                    <Controller
                        name="drugsFrecuency"
                        control={formControl}
                        rules={{ required: drugs && 'Frecuencia es requerido' }}
                        render={({ field, fieldState }) => (
                            <>                                                
                                <div className='flex w-12'>
                                    <span className="p-float-label w-12">
                                        <Dropdown
                                            showClear
                                            id={field.name}
                                            value={field.value}
                                            optionLabel="label"                                                            
                                            options={[{label: 'He consumido en el pasado', value: 1}, {label: 'Diariamente', value: 2}, {label: 'Semanalmente', value: 3}, {label: 'Mensualmente', value: 4}, {label: 'Esporádicamente', value: 5}]}
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
                    { <div className='flex flex-column gap-4'>
                        <Controller
                            name="drugsType"
                            control={formControl}
                            rules={{ required: drugs && 'Frecuencia es requerido' }}
                            render={({ field, fieldState }) => (
                                <>                                                
                                    <div className='flex w-12'>
                                        <span className="p-float-label w-12">
                                            <MultiSelect 
                                                id={field.name} 
                                                name="value" 
                                                value={field.value} 
                                                options={drugTypes} 
                                                onChange={(e) => field.onChange(e.value)} 
                                                optionLabel="name" 
                                                maxSelectedLabels={3} 
                                                className='w-12'
                                                display="chip"
                                            />
                                            <label htmlFor={field.name}>Tipo de Drogas</label>
                                        </span>
                                        {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                    </div>                                                             
                                </>
                            )}
                        />  
                        {drugsFrecuency === 1 ? 
                            <Controller
                                name="drugsConsumption"
                                control={formControl}
                                rules={{ required: drugs && 'Frecuencia es requerido' }}
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
                                                <label htmlFor={field.name}>Consumo</label>
                                            </span>
                                            {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                        </div>                                                             
                                    </>
                                )}
                            /> : drugsFrecuency !==5 &&
                            <Controller
                                name="drugsAmount"
                                control={formControl}
                                rules={{ required: drugs && 'Frecuencia es requerido' }}
                                render={({ field, fieldState }) => (
                                    <>                                                
                                        <div className='flex w-12'>
                                            <span className="p-float-label">
                                                <InputNumber 
                                                    suffix={getTextConsumptions()}
                                                    id={field.name} 
                                                    value={field.value} 
                                                    className={`w-12 ${fieldState.error && 'p-invalid' }`} 
                                                    onChange={(e) => field.onChange(e.value)}                                     
                                                />
                                                <label htmlFor={field.name}>{getTextConsumptions()}</label>
                                            </span>
                                            {formErrors.smokeAmmount && <small className="p-error">{formErrors.smokeAmmount.message}</small>}                       
                                        </div>                                                             
                                    </>
                                )}
                            />
                                
                        }
                    </div>  
                }                     
                </div>}
            </div>
        </Card>
    )
}

export default Drugs