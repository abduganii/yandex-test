import { Checkbox } from "antd";
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const options1 = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const options2 = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const options3 = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];

export default function CategorySection() {
    return (
      <div className="flex flew-wrap">
        <div>
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Ovqatlanish</h4>
           <Checkbox.Group options={options} defaultValue={['Apple']} />
        </div>
        <div>
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Ovqatlanish</h4>
           <Checkbox.Group options={options1} defaultValue={['Apple']} />
        </div>
        <div>
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Ovqatlanish</h4>
           <Checkbox.Group options={options2} defaultValue={['Apple']} />
        </div>
        <div>
          <h4 class="text-white text-lg font-medium  leading-7 mb-[16px]">Ovqatlanish</h4>
           <Checkbox.Group options={options3} defaultValue={['Apple']} />
        </div> 
     
      </div>
    )
  }
  