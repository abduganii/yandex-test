import { Checkbox } from "antd";

const options = [
  {
    label: 'Wi-Fi',
    value: 'wi-fi',
  },
  {
    label: 'Dam olish xonasi',
    value: 'bathroom',
  },
  {
    label: 'Parking',
    value: 'parking',
  },
  {
    label: 'Delivery',
    value: 'delivery',
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



export default function AboutSection({setValue,watchedFiles}) {
  
  const onChangeFung = (e) => {
    if (!watchedFiles?.about_choices?.length) {
      setValue('about_choices',e )
      
    } else {
      e?.map(v => {
        if (watchedFiles?.about_choices?.includes(v)) {
          setValue('about_choices', watchedFiles?.about_choices?.filter(f=>f != v))
        } else {
          setValue('about_choices', [v, ...watchedFiles?.about_choices])
        }
          
      } )

    }
  }
    return (
      <div className="flex flex-wrap sm:flex-nowrap gap-[10px]">
   

        <div className="w-1/3 sm:w-full ">
           <Checkbox.Group options={options} onChange={onChangeFung}  />
        </div>
       
        <div className="w-1/3 sm:w-full ">
           <Checkbox.Group options={options1} onChange={onChangeFung}  />
        </div>
     
        <div className="w-full ">
           <Checkbox.Group options={options2}  onChange={onChangeFung} />
        </div>
      </div>
    )
  }
  