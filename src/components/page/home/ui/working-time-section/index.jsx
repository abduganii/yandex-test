import { Switch } from "antd";
import { useEffect, useState } from "react";
import GlobalInput from "../../../../ui/form/global-input";
import TimeZoneSelect from "../../../../ui/form/time-zone";
// {
//   "endTime": "18:00",
//   "dayOfWeek": 1,
//   "startTime": "09:00"
// },


const date = [
  {
    id: 1,
    name:"Dushanba"
  },
  {
    id: 2,
    name:"Seshanba"
  },
  {
    id: 3,
    name:"Chorshanba"
  },
  {
    id: 4,
    name:"Payshanba"
  },
  {
    id: 5,
    name:"Juma"
  },
  {
    id: 6,
    name:"Shanba"
  },
  {
    id: 7,
    name:"Yakshanba"
  },
]
export default function WorkingTimeSection({ register, watchedFiles ,setValue}) {
  const [Actives, setActive] = useState(watchedFiles?.work_days?.length ? watchedFiles?.work_days?.map(e=>e.dayOfWeek) : [])
  useEffect(() => {
    date.map((e, i) => {
      if (Actives.includes(e?.id)) {
        setValue(`work_days.[${i}].dayOfWeek`,e?.id)
      }
    })
  }, [Actives])
    
  return (
    <div>
      <h4 class=" text-white text-xl font-medium  leading-7 mb-[24px]">
        Hafta kunlari
      </h4>
      {
        date.map((e, i) =>  (
          <div key={e?.id} className="flex  items-center mb-[24px]">
          <label className="flex gap-[12px] items-center w-full max-w-[183px]">
              <Switch checked={ Actives.includes(e?.id)} onChange={() => {
                if (Actives.includes(e?.id)) {
                  setActive(Actives?.filter(f => f !== e?.id))
                  setValue("work_days", watchedFiles?.work_days?.filter(f => f?.dayOfWeek !== e?.id))
                } else {
                  setActive([e?.id, ...Actives])
                }
              }} />
            <p class="text-center text-white text-base font-medium  leading-snug cursor-pointer">
              {e?.name}
            </p>
          </label>
          <div className="flex items-center gap-[8px]">
            <GlobalInput
              type="time"
                className={"max-w-[77px]"}
                disabled={!Actives.includes(e?.id) }
                style={{ padding: "8px 16px" }}
                value={watchedFiles?.work_days?.[i]?.startTime || "" }
                register={Actives.includes(e?.id) ? { ...register(`work_days.[${i}].startTime`)}:null}
            />
            <div class="text-white text-base font-normal font-['Inter'] leading-normal">
              -
            </div>
            <GlobalInput
              type="time"
                className={"max-w-[77px]"}
                disabled={!Actives.includes(e?.id) }
                style={{ padding: "8px 16px" }}
                value={watchedFiles?.work_days?.[i]?.endTime || "" }
                register={Actives.includes(e?.id) ? { ...register(`work_days.[${i}].endTime`)}:null}
            />
          </div>
        </div>
        )
        
        )
      }
      <label className="flex gap-[12px] items-center">
        <Switch onChange={(e) => {
          if (Actives.length && Actives.length == 7  ) {
            setActive([])
          } else {
            setActive([1,2,3,4,5,6,7])
          }
        }} />
        <p class="text-center text-white text-base font-medium  leading-snug cursor-pointer">
          Dam olish kunlarisiz
        </p>
      </label>

      <h3 className="text-[23px] font-medium  leading-loose pb-[16px] border-b border-1 border-gray-600 mb-[40px] mt-[72px]">
        Vaqt mintaqasi
      </h3>
      <TimeZoneSelect onChange={(e)=>setValue('timezone',e)} />
    </div>
  );
}

<div class="text-white text-[23px] font-medium font-['Overused Grotesk'] leading-loose">
  Vaqt mintaqasi
</div>;
