import { Checkbox } from "antd";

const options = [
  {
    label: 'Fast food',
    value: 'fast_food',
  },
  {
    label: 'Kafe',
    value: 'cafe',
  },
  {
    label: 'Restoran',
    value: 'restaurant',
  },
  {
    label: 'Choyxona',
    value: 'choyxona',
  },
];
const options1 = [
  {
    label: 'Tikishxona',
    value: 'custom_tailor',
  },
  {
    label: 'Ximchistka',
    value: 'chemical_cleaning',
  },
  {
    label: 'Gilam yuvish',
    value: 'gilam_yuvish',
  },

];
const options2 = [
  {
    label: 'Dorixona',
    value: 'pharmacy',
  },

  {
    label: 'Ved dorixona',
    value: 'ved_dorixona',
  },
  {
    label: 'Agro dorixona',
    value: 'agro_dorixona',
  },

];

const options3 = [
  {
    label: 'Metan',
    value: 'metan_station',
  },
  {
    label: 'Propan',
    value: 'propan_station',
  },
  {
    label: 'Dizel',
    value: 'dizel_station',
  },
  {
    label: 'Benzin',
    value: 'benzin_station',
  },
  {
    label: 'Elektro quvvatlash',
    value: 'electr_station',
  },
  {
    label: 'Avtomoyka',
    value: 'car_wash',
  },
  {
    label: 'Sam moyka',
    value: 'sam_moyka',
  },
  {
    label: 'Avto ustaxona',
    value: 'Auto_repair_shop',
  },
  {
    label: 'Shina montaj',
    value: 'shina_montaj',
  },
];
const options4 = [
  {
    label: 'Stamotolog',
    value: 'stamotolog',
  },
  {
    label: 'Medservis',
    value: 'medical_clinic',
  },
  {
    label: 'Dianostika',
    value: 'sianostika',
  },
  {
    label: 'Shifoxona',
    value: 'shifoxona',
  },
  
];
const options5 = [
  {
    label: 'KiberSport',
    value: 'kiberSport',
  },
  {
    label: 'Stadion',
    value: 'stadion',
  },
  {
    label: 'Bovling',
    value: 'bovling',
  },
  {
    label: 'Billiard',
    value: 'billiard',
  },
  {
    label: 'Trenajor zal',
    value: 'Trenajor zal',
  },
  {
    label: 'Suzish',
    value: 'Suzish',
  },
  {
    label: 'Ot klubi',
    value: 'Ot klubi',
  },
  {
    label: 'Stol tennisi',
    value: 'Stol tennisi',
  },

];
const options6 = [
  {
    label: 'Mehmonxona',
    value: 'hotel',
  },
  {
    label: 'Masjid',
    value: 'mosque',
  },
  {
    label: 'Davlat xizmatlari',
    value: 'political',
  },
 
  
];

export default function CategorySection({setValue,watchedFiles}) {
  
  const onChangeFung = (e) => {
    if (!watchedFiles?.place_type?.length) {
      setValue('place_type',e )
      
    } else {
      e?.map(v => {
        if (watchedFiles?.place_type?.includes(v)) {
          setValue('place_type', watchedFiles?.place_type?.filter(f=>f != v))
        } else {
          setValue('place_type', [v, ...watchedFiles?.place_type])
        }
          
      } )

    }
  }

    return (
      <div className="flex flew-wrap gap-[10px]">
        <div className="w-full">
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Ovqatlanish</h4>
           <Checkbox.Group options={options}  onChange={onChangeFung}  />
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px] mt-[56px]">Xizmat ko’rsatish</h4>
          <Checkbox.Group options={options1}    onChange={onChangeFung} />
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px] mt-[56px]">Dorixona</h4>
           <Checkbox.Group options={options2}    onChange={onChangeFung} />
        </div>
       
        <div className="w-full">
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Avtombillarga</h4>
           <Checkbox.Group options={options3}   onChange={onChangeFung}  />
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px] mt-[56px]">Kasalxona</h4>
           <Checkbox.Group options={options4}    onChange={onChangeFung}/>
        </div>
       
        <div className="w-full hidden sm:block">
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Sport</h4>
           <Checkbox.Group options={options5}   onChange={onChangeFung} />
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px] mt-[56px]">Boshqa</h4>
           <Checkbox.Group options={options6}   onChange={onChangeFung} />
        </div>
      </div>
    )
  }
  