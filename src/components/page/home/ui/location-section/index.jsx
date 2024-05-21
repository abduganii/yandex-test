import { useState } from "react";
import GlobalInput from "../../../../ui/form/global-input";
import YandexMap from "../../../../ui/yandex-map";



export default function LocationSection() {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = (coords) => {
    console.log(coords)
  }; //select value from yandex map

  const handleSearch = async (value) => {
    setSearchValue(value);
    setLoading(true);
  
      try {
        const response = await fetch(`https://yourapi.com/search?q=${value}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch suggestions: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const newOptions = data.map((item) => ({ value: item.value }));
        setOptions(newOptions);
      } catch (error) {
        console.error("Error fetching suggestions:", error.message);
      }
    setLoading(false);
  }; // func to search for yandex suggestions

  const handleSelect = (value, option) => {
    setSearchValue(value);
  }; //select search value 

    return (
      <div>
        {/* <GlobalInput
          placeholder={"Manzil"}
          label={"Joy manzilini kiriting"}
          type="autocomplete"
          value={searchValue}
          options={options}
          onSelect={handleSelect}
        onSearch={handleSearch}
          className={'max-w-[298px] mb-[32px]'}
        /> */} 
        <GlobalInput
          placeholder={"Manzil"}
          label={"Joy manzilini kiriting"}
          className={'max-w-[298px] mb-[32px]'}
        />
        <YandexMap
          onLocationSelect={handleLocationSelect}
        />
        <GlobalInput
          label={"Joy haqida ma’lumotlar"}
          placeholder={"Joy haqida"}
          type={"textarea"}
          className={"mt-[32px]"}
        />
      </div>
    )
  }
  