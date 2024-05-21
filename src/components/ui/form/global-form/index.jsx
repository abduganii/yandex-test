import React from 'react'

import { AddData } from '../../../../services/glabal';
import BackBase from '../../button/back-btn';
import BtnBase from '../../button/base-btn';
import { LeftIcons, RightIcons } from '../../icons';

export default function  ({
    children,
    handleSubmit = () => { },
    url,
  title,
  step,
  setSteps,
  maxStepLength
}) { 
     const handleAdd = async (data) => {  
        await AddData(url, JSON.stringify(data))
            .then(() => {
               
            })
            .catch((error) => {
                if (error?.response?.status == 400) {
                } else {
                    console.log("error here")
                }
            });
    }  // global form sender post
  return ( 
    <form className='bg-zinc-900 rounded-3xl border-2 border-gray-600 p-[56px]' onSubmit={handleSubmit(handleAdd)}>  
          <h3 className='text-[29px] font-semibold  leading-10 pb-[16px] border-b border-1 border-gray-600 mb-[40px]'>{title}</h3>
            {children}
          <div className='flex w-full justify-end gap-[24px] mt-[72px]'>
              {step > 0 && <BackBase onClick={()=>setSteps(step-1)} > <LeftIcons/> Orqaga</BackBase>}
             <BtnBase type={maxStepLength == step+1 ? "submit" : "button"} onClick={maxStepLength > step+1 ? () => setSteps(step + 1) : null}>
             {maxStepLength == step+1 ? "Yuborish" : "Keyingisi"} 
              <RightIcons />
            </BtnBase>
          </div>
    </form>
  )
}