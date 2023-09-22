import { FC, useEffect, useState } from 'react';

import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from 'primereact/dropdown';

import { Controller, useForm } from 'react-hook-form';
import { Alcohol, BasicInformation, Drugs, HighBloodPressure, Smoke } from 'components';

interface Props {
}

export interface formControl{
    name: string; 
    surname: string;
    dni: string;
    insuredCapital: null;
    lifeInsurance: boolean;
    ipa: boolean;
    weight: null;
    height: null;
    smoke: boolean;
    smokeAmmount: null;
    alcohol: boolean;
    acoholFrecuency: null;
    alcoholAmount: null;
    alcoholType:null;
    drugs: boolean;
    drugsFrecuency: null;
    drugsType: null;
    drugsConsumption: null;
    drugsAmount: null;
    bloodPressure: boolean;
    whenHighBlood: null;
    frecuencyHighBlood: null;
    bloodPressureLevel: null;
    treatmentBloodPressure: null;
    treatmentBloodPressureQuestion: boolean;
    hipertensiveCrisisQuestion: boolean;
    hipertensiveCrisisRequest: boolean;
    hipertensiveCrisisSimptons: null;
    ecgQuestion: boolean;
    ecgRequest: boolean;
    cholesterol: boolean;
    cholesterolLevel: null;
    triglycerides: boolean;
    triglyceridesLevel: null;
}

export interface formErrors{
    name: string;
    surname: string;
    dni: string;
    insuredCapital: null;
    lifeInsurance: boolean;
    ipa: boolean;
    weight: null;
    height: null;
    smoke: boolean;
    smokeAmmount: null;
    alcohol: boolean;
    acoholFrecuency: null;
    alcoholAmount: null;
    alcoholType:null;
    drugs: boolean;
    drugsFrecuency: null;
    drugsType: null;
    drugsConsumption: null;
    drugsAmount: null;
    bloodPressure: boolean;
    whenHighBlood: null;
    frecuencyHighBlood: null;
    bloodPressureLevel: null;
    treatmentBloodPressure: null;
    treatmentBloodPressureQuestion: boolean;
    hipertensiveCrisisQuestion: boolean;
    hipertensiveCrisisRequest: boolean;
    hipertensiveCrisisSimptons: null;
    ecgQuestion: boolean;
    ecgRequest: boolean;
    cholesterol: boolean;
    cholesterolLevel: null,
    triglycerides: boolean;
    triglyceridesLevel: null;
}

interface Clients {
    clientId: number,
    clientEmail: string,

}

const Telesuscription: FC<Props> = () => {

    const clients: Clients[] = [
        { clientId: 1, clientEmail: 'itziar.garcia@life5.com'}
    ];

    const startContent = (                
        <a href="/"><img src="https://storage.googleapis.com/getlife-bucket-1/public/image/life5/Life_5_Logo_BG.svg"/></a>            
    );
    
    const endContent = (                
        <h2 style={{color: '#423ef4'}}>Encuesta de salud</h2>    
    );

    const defaultValues: formControl = {
        name: '',
        surname: '',
        dni:'',
        insuredCapital: null,
        lifeInsurance: true,
        ipa: false,

        weight: null,
        height: null,
        
        smoke: false,
        smokeAmmount: null,

        alcohol: false,
        acoholFrecuency: null,
        alcoholType: null,
        alcoholAmount: null,

        drugs: false,
        drugsFrecuency: null,
        drugsType: null,
        drugsConsumption: null,
        drugsAmount: null,

        bloodPressure: false,
        whenHighBlood: null,
        frecuencyHighBlood: null,
        bloodPressureLevel: null,
        treatmentBloodPressure: null,
        treatmentBloodPressureQuestion: false,
        hipertensiveCrisisQuestion: false,
        hipertensiveCrisisRequest: false,
        hipertensiveCrisisSimptons: null,
        ecgQuestion: false,
        ecgRequest: false,
        cholesterol: false,
        cholesterolLevel: null,
        triglycerides: false,
        triglyceridesLevel: null,
        
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        setValue,
        reset,
        watch
    } = useForm({ defaultValues });

    const smoke = watch('smoke');
    const alcohol = watch('alcohol');
    const alcoholFrecuency = watch('acoholFrecuency');
    const drugs = watch('drugs');
    const drugsFrecuency = watch('drugsFrecuency');
    const bloodPressure = watch('bloodPressure');
    const whenHighBlood = watch('whenHighBlood');
    const treatmentBloodPressureQuestion = watch('treatmentBloodPressureQuestion');
    const hipertensiveCrisisQuestion = watch('hipertensiveCrisisQuestion');
    const hipertensiveCrisisRequest = watch('hipertensiveCrisisRequest');
    const ecgQuestion = watch('ecgQuestion');
    const cholesterol = watch('cholesterol');
    const triglycerides = watch('triglycerides');

    useEffect(() => {
      if(!alcohol){
        setValue('acoholFrecuency', null);
        setValue('alcoholType', null);
        setValue('alcoholAmount', null);
      }
    }, [alcohol])
    
    useEffect(() => {
      if(!drugs){        
        setValue('drugsFrecuency', null);
        setValue('drugsType', null);
        setValue('drugsConsumption', null);
        setValue('drugsAmount', null);
      }

    }, [drugs])
        
    useEffect(() => {
      if(!smoke){
        setValue('smokeAmmount', null);        
      }

    }, [smoke])
    

    const onSubmit = (data: any) => {
        

        reset();
    };    

    // <div className='flex flex-column gap-2 mr-5 ml-5 mt-4'>
    //     <span>
    //         Antes de realizar el siguiente cuestionario, le informamos que los datos de este contrato serán conservados durante toda la vigencia de la poliza.
    //     </span>
    //     <span>
    //         Usted ha de contestar de forma veraz y concreta a las preguntas que se le formulen, siendo necesario que nos autorice a tratar sus datos personales, incluidos los de salud y ceder estos al contratante de la póliza.
    //     </span>
    //     <span>
    //         Estos datos son necesarios para la contratación del seguro y para el mantenimiento de la relación contractual y serán tratados de forma confidencial e incorporados a un fichero de Axa Aurora Vida, Sociedad anónima de Seguros y Reaseguros.
    //     </span>
    //     <span>
    //         Usted podrá dirigirse a AXA SEGUROS E INVERSIONES, (Departamento de Marketing-CRM), Calle Emilio Vargas, 6, Edificio Axa 28043 Madrid, o bién a traves de buzon.lopd@axa.es, para ejercer sus derechos de acceso, rectificación, cancelación y oposición, en los terminos establecidos en la legislación vigente.
    //     </span>
    // </div>
    
    return (
        <>
            <div>
                <Toolbar start={startContent} end={endContent} style={{width: '100%'}}/>
                    <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
                        
                        <div className="flex flex-column gap-2 w-12">
                            <span>
                                A continuación se muestra un cuestionarios de salud el cual debe cumplimentar para poder ofrecerle un precio final para su seguro de vida.
                            </span>                        
                            
                            <BasicInformation formControl={control} formErrors={errors}/>                       

                            <div className='flex flex-column gap-1 mt-5'>
                                <span className='text-primary'>
                                    Consumos
                                </span>
                                <div className='flex flex-row mt-2 gap-3 w-12'>
                                    <div>
                                        <Smoke formControl={control} formErrors={errors} smoke={smoke}/>                                                                                        
                                    </div>
                                    <div>
                                        <Alcohol formErrors={errors} formControl={control} alcohol={alcohol} alcoholFrecuency={alcoholFrecuency}/>                                
                                    </div>
                                    <div>
                                        <Drugs formErrors={errors} formControl={control} drugs={drugs} drugsFrecuency={drugsFrecuency}/>                                
                                    </div>
                                    <div>
                                        <HighBloodPressure 
                                            formErrors={errors} 
                                            formControl={control} 
                                            bloodPressure={bloodPressure} 
                                            whenHighBlood={whenHighBlood} 
                                            treatmentBloodPressureQuestion={treatmentBloodPressureQuestion} 
                                            hipertensiveCrisisQuestion={hipertensiveCrisisQuestion}
                                            hipertensiveCrisisRequest={hipertensiveCrisisRequest}
                                            ecgQuestion={ecgQuestion}
                                            cholesterol={cholesterol}
                                            triglycerides={triglycerides}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex align-items-center'>
                                <Button label="Submit" type="submit" icon="pi pi-check"  />
                            </div>
                        </div>
                    </form>
            </div>
        </>
    )
}

export default Telesuscription