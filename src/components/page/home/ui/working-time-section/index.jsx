
import { Switch } from 'antd';
import GlobalInput from '../../../../ui/form/global-input';
import TimeZoneSelect from '../../../../ui/form/time-zone';

export default function WorkingTimeSection() {
  return (
    <div>
      <h4 class=" text-white text-xl font-medium  leading-7 mb-[24px]">Hafta kunlari</h4>

      <div className="flex  items-center mb-[24px]">
        <label className='flex gap-[12px] items-center w-full max-w-[183px]'>
          <Switch defaultChecked   />
          <p class="text-center text-white text-base font-medium  leading-snug cursor-pointer">Dushanba</p>
        </label>
        <div className='flex items-center gap-[8px]'>
          <GlobalInput
            type="time"
            options={[]} 
            className={'max-w-[77px]'}
            style={{"padding":"8px 16px"}}
          />
            <div  class="text-white text-base font-normal font-['Inter'] leading-normal">-</div>
          <GlobalInput
            type="time"
            options={[]} 
            className={'max-w-[77px]'}
            style={{"padding":"8px 16px"}}
          />
        </div>
      </div>

      <label className='flex gap-[12px] items-center'>
          <Switch defaultChecked   />
          <p class="text-center text-white text-base font-medium  leading-snug cursor-pointer">Dam olish kunlarisiz</p>
      </label>
      

      <h3 className='text-[23px] font-medium  leading-loose pb-[16px] border-b border-1 border-gray-600 mb-[40px] mt-[72px]'>Vaqt mintaqasi</h3>

      <TimeZoneSelect/>
    </div>
  )
}

<div class="text-white text-[23px] font-medium font-['Overused Grotesk'] leading-loose">Vaqt mintaqasi</div>
