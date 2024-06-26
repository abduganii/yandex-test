import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { AddData } from '../../../../services/glabal';
import BackBase from '../../button/back-btn';
import BtnBase from '../../button/base-btn';
import { InfoIcons, LeftIcons, RightIcons, TreeIcons } from '../../icons';
import Loader from '../../loader';
import SeccessModal from '../../modal';

export default function  ({
    children,
    handleSubmit = () => { },
    url,
  title,
  step,
  setSteps,
  reset,
  maxStepLength,
  isValidStep,
  type,
  setType
}) { 
  
  const [open,setOpen]= useState(false)
  const [loading,setLoading]= useState(false)
  const handleAdd = async (data) => {  
    setLoading(true)
    const formData = new FormData();
    if(data?.about_choices) formData.append("about", JSON.stringify(data?.about_choices));
    if(data?.facebook) formData.append("facebook", data?.facebook);
    if(data?.full_address)  formData.append("full_address", data?.full_address);
    if(data?.image)  formData.append("image", data?.image);
    if(data?.instagram)  formData.append("instagram", data?.instagram);
    if(data?.latitude)  formData.append("latitude", data?.latitude);
    if(data?.longitude)  formData.append("longitude", data?.longitude);
    if(data?.name)  formData.append("name", data?.name);
    if(data?.place_type)  formData.append("place_type", JSON.stringify(data?.place_type));
    if(data?.telegram)  formData.append("telegram", data?.telegram);
    if(data?.telegram_bot)  formData.append("telegram_bot", data?.telegram_bot);
    if(data?.timezone)  formData.append("timezone", data?.timezone);
    if(data?.user_name)  formData.append("user_name", data?.user_name);
    if(data?.user_phone)  formData.append("user_phone", data?.user_phone);
    if(data?.website)  formData.append("website", data?.website);
    if(data?.work_days)  formData.append("work_days",JSON.stringify(data?.work_days));
    if(data?.youtube)  formData.append("youtube", data?.youtube);
        await AddData(url, formData)
            .then(() => {
              setOpen(true)
              reset()
            })
          .catch((error) => {
            if (error?.response?.data) {
              if (error?.response?.data?.website) toast.error(error?.response?.data?.website?.[0]) 
              else if (error?.response?.data?.telegram) toast.error(error?.response?.data?.telegram?.[0]) 
              else if (error?.response?.data?.facebook) toast.error(error?.response?.data?.facebook?.[0]) 
              else if (error?.response?.data?.youtube) toast.error(error?.response?.data?.youtube?.[0]) 
            } else {
              toast.error("somthing went wrong")
              }
                
            })
          .finally(() => {
            setType(false)
            setLoading(false)
          })
  }  // global form sender post
  return ( 
    <form className={` flex flex-col  justify-between sm:block myForm sm:bg-zinc-900 sm:rounded-3xl sm:border-2 sm:border-gray-600 sm:p-[56px] md:mx-[82px]`}
      onSubmit={handleSubmit(handleAdd)}> 
      <div >
        
        <h3 className='text-[29px] font-semibold  leading-10 pb-[16px] border-b border-1 border-gray-600 mb-[40px] flex items-center gap-[12px] relative'>
          {title}
          <span className='cursor-pointer myhover'>
          <InfoIcons/>
          </span>
            <div class="hidden absolute  left-[180px] w-80 h-[100px] p-3 bg-zinc-700 rounded-lg  justify-start items-start ">
            <span className="absolute top-[42px] left-[-8.5px]"> <TreeIcons/></span>
            <div class="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch text-white text-xs font-semibold font-['Inter'] leading-[18px]">This is a tooltip</div>
            <div class="self-stretch text-gray-300 text-xs font-medium font-['Inter'] leading-[18px]">Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.</div>
            </div>
            </div>
        </h3>
        {children}
        </div>
        <div className='flex w-full justify-end gap-[24px] mt-[72px] mb-[32px] sm:mb-[0]'>
          {step > 0 && <BackBase
            className={'w-1/2 sm:w-[120px]'} 
            onClick={() => {
              setSteps(step - 1)
              setType(false)
            }}
            
          > <LeftIcons />Orqaga</BackBase>}
          <BtnBase  className={'w-1/2 sm:w-[120px]'} type={ type ? "submit" : "button"}
            onClick={maxStepLength > step + 1 ?
              async () => {
                const isval = await isValidStep()
                if (isval) {
                  setSteps(step + 1)
                  setType(false)
                }
              } :
              () => setType(true)
            }>
              {maxStepLength == step+1 ? "Yuborish" : "Keyingisi"} 
                <RightIcons />
            </BtnBase>
        </div>
      
      {open && <SeccessModal ok={() => {
        setOpen(false)
        setSteps(0)
      }}
        close={() => setOpen(false)}
      />}
      {loading && <Loader/>}
    </form>
  )
}