import React from 'react'
import { DownIcons } from '../icons'

export default function Lang({className}) {
  return (
    <>
          <div
              className={`cursor-pointer bg-zinc-950 rounded-[26px] p-[8px] border border-neutral-800 justify-center items-center gap-2 inline-flex text-base font-normal  leading-snug ${className && className}`}
          >
              <img src='/uzbekistán.svg' alt='img' width={20} height={ 20}   className="object-contain rounded"/>
              O’zbek
              <DownIcons/>
        </div>
    </>
  )
}

