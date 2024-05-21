import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Steps } from 'antd';

import { StepArray } from '../../data';

import ContainerMin from '../../ui/container/min-container'
import GlobalForm from '../../ui/form/global-form';
import NameSection from './ui/name-section';
import WorkingTimeSection from './ui/working-time-section';
import LocationSection from './ui/location-section';
import LinksSection from './ui/links-section';
import ImageSection from './ui/image-section';
import FullNameSection from './ui/full-name-section';
import CategorySection from './ui/category-section';
import AboutSection from './ui/about-section';

const stepsComponents = [
  NameSection,
  ImageSection,
  LocationSection,
  CategorySection,
  WorkingTimeSection,
  LinksSection,
  AboutSection,
  FullNameSection,
];
export default function HomePage() {
  const [step, setSteps] = useState(0)
  
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        getValues,
        reset,
      watch,
      trigger,
        formState: { errors },
    } = useForm();
  const watchedFiles = watch();

  const checkValidation = async () => {
    if (step ==0) {
      const result = await trigger('name'); // 'myInput' is the name of the field to validate
      return result;
    } 
    return true
  };
  
  return (
    <ContainerMin>
        <Steps
            current={step} 
            labelPlacement="vertical"
            items={StepArray} 
            className={"mb-[32px]"}
        />
        <GlobalForm
            url={'new-place/'}// url to send date "api"
            handleSubmit={handleSubmit} // form send date function "api"
             title={StepArray[step].title}
             info={StepArray[step]?.info}
            setSteps={setSteps}
            step={step}
            reset={reset}
            isValidStep={ checkValidation}
            maxStepLength={StepArray?.length}
      > 
        {React.createElement(stepsComponents[step], {
                    register,
                    setValue,
                    getValues,
                    watchedFiles,
                    errors,
                    setError,
                })}
             {stepsComponents[step]}
      </GlobalForm>
      
   
    </ContainerMin>
  )
}
