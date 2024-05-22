import React from 'react'
import { DownIcons } from '../icons'

export default function SptepRespons({step,setStep,isValidStep, setType,stepArr}) {
  return (
    <div className='my-[30px] md:hidden'>
        <div className='flex items-center justify-between mb-[26px]'>
              <span 
                    className='rotate-90'
        onClick={() => {
            if (step > 0) {
            setStep(step - 1)
            setType(false)
            }
        }}
              
              ><DownIcons /></span>
        <p className='text-[26px] font-medium  leading-9'><span className='text-blue-600'>{step +1}</span> / {stepArr?.length }</p>    
              <span
                    className='-rotate-90'
                  onClick={stepArr.length > step + 1 ?
                        async () => {
                        const isval = await isValidStep()
                        if (isval) {
                            setStep(step + 1)
                            setType(false)
                        }
                        } :
                    () => setType(true)
                }><DownIcons /></span>
          </div>
          <div className='flex gap-[7px]'>
              {
                  stepArr && stepArr?.map((e,i) => (
                      <div key={e} className={`w-full  h-1  rounded-md ${i > step ? "bg-gray-200" : i < step ? "bg-green-500" :"bg-blue-600"}`}></div>
                ))
               }
          </div>
    </div>
  )
}
