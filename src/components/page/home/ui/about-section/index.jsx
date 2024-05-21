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
export default function AboutSection() {
    return (
      <div className="flex">
        <Checkbox.Group options={options} defaultValue={['Apple']} />
        <Checkbox.Group options={options} defaultValue={['Apple']} />
        <Checkbox.Group options={options} defaultValue={['Apple']} />
      </div>
    )
  }
  