import React from 'react'
import { DeleteXIcons, DoneIcons } from '../icons'

export default function SeccessModal({close}) {
    return (
        <div onClick={close} class="w-screen h-screen fixed top-0 left-0  bg-gray-800/opacity-70 mybgColor flex justify-center items-center" style={{"zIndex":"1111111111000"}}>
            <div onClick={(e)=>e.stopPropagation()} class="w-full max-w-[400px]  p-[24px]  bg-zinc-950  rounded-lg" style={{"zIndex":"1111111111001"}}>
                <div className='flex justify-between cursor-pointer' onClick={close}>
                    <div class=" p-3 bg-emerald-600 rounded-full justify-center items-center inline-flex">
                        <DoneIcons/>
                    </div>
                    <DeleteXIcons/>
                </div>

                <h4 class="w-fill  text-neutral-100 text-lg font-semibold mt-[16px] mb-[2px] leading-7">Arizangiz qabul qilindi</h4>
                <p class="w-full text-neutral-400 text-sm font-normal  leading-tight">Arizangiz moderatorlarimiz tomonidan ko’rib chiqilib, 24 soat ichida javob beriladi</p>
                <button className='w-full px-4 py-2.5 bg-blue-600 rounded-lg shadow border border-blue-600 justify-center items-center gap-1.5 inline-flex text-white text-base  leading-normal mt-[32px]'>
                Bosh sahifaga qaytish
                </button>
            </div>  
        </div>
  )
}

