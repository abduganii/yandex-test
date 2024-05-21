import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { AutoComplete } from 'antd';

// Generate options for the select input
const getTimeZoneOptions = () => {
    return moment.tz.names().map(timezone => {
      const offset = moment.tz(timezone).utcOffset();
      const sign = offset >= 0 ? '+' : '-';
      const hours = Math.floor(Math.abs(offset) / 60);
      const minutes = Math.abs(offset) % 60;
      const formattedOffset = `UTC ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      const label = `(${formattedOffset}) ${timezone.replace('_', ' ')}`;
      return {
        value: timezone,
        label: label,
      };
    });
  };

const TimeZoneSelect = ({ value, onChange }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(getTimeZoneOptions());
    }, []);
    
      const handleSearch = (searchText) => {
        const filteredOptions = getTimeZoneOptions().filter(option =>
          option.label.toLowerCase().includes(searchText.toLowerCase())
        );
        setOptions(filteredOptions);
      };
  
    const handleChange = (value) => {
      onChange(value);
  
    };

    return (
       <label className={`w-full block`}>
           {<p className="ml-[3px] text-neutral-300 text-sm font-medium  leading-tight mb-[6px]">Vaqt mintaqasini tanlang</p>}
                <AutoComplete
                    className="w-full max-w-[295px]  inline-flex"
                    options={options}
                    value={value}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    placeholder="Vaqt mintaqasini tanlang"
                        />
            </label>
  );
};

export default TimeZoneSelect;
