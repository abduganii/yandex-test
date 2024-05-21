import React, { useState } from 'react'

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
  info,
}) { 
  const [type,setType]= useState(false)
  const [open,setOpen]= useState(false)
  const [loading,setLoading]= useState(false)
  const handleAdd = async (data) => {  
    setLoading(true)
    const formData = new FormData();
    formData.append("about", JSON.stringify(data?.about_choices));
    formData.append("facebook", data?.facebook);
    formData.append("full_address", data?.full_address);
    formData.append("image", data?.image);
    formData.append("instagram", data?.instagram);
    formData.append("latitude", data?.latitude);
    formData.append("longitude", data?.longitude);
    formData.append("name", data?.name);
    formData.append("place_type", JSON.stringify(data?.place_type));
    formData.append("telegram", data?.telegram);
    formData.append("telegram_bot", data?.telegram_bot);
    formData.append("timezone", data?.timezone);
    formData.append("user_name", data?.user_name);
    formData.append("user_phone", data?.user_phone);
    formData.append("website", data?.website);
    formData.append("work_days",JSON.stringify(data?.work_days));
    formData.append("youtube", data?.youtube);
        await AddData(url, formData)
            .then(() => {
              setOpen(true)
              reset()
            })
            .catch((error) => {
                if (error?.response?.status == 400) {
                } else {
                    console.log("error here")
                }
            })
          .finally(() => {
            setType(false)
            setLoading(false)
          })
  }  // global form sender post
  return ( 
    <form className='bg-zinc-900 rounded-3xl border-2 border-gray-600 p-[56px]' onSubmit={handleSubmit(handleAdd)}>  
      <h3 className=' text-[29px] font-semibold  leading-10 pb-[16px] border-b border-1 border-gray-600 mb-[40px] flex items-center gap-[12px] relative'>
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
          <div className='flex w-full justify-end gap-[24px] mt-[72px]'>
        {step > 0 && <BackBase onClick={() => {
          setSteps(step - 1)
          setType(false)
        }} > <LeftIcons />Orqaga</BackBase>}
        <BtnBase type={ type ? "submit" : "button"}
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