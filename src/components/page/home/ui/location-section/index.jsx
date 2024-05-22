import GlobalInput from "../../../../ui/form/global-input";
import YandexMap from "../../../../ui/yandex-map";

export default function LocationSection({watchedFiles, register,setValue }) {

  const handleLocationSelect = (coords) => {
    setValue("latitude", coords?.[0]);
    setValue("longitude", coords?.[1]);
  }; //select value from yandex map

  return (
    <div>
   
      <GlobalInput
        placeholder={"Manzil"}
        label={"Joy manzilini kiriting"}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.full_address || "" }
          register={{ ...register(`full_address`)}}
      />
      <YandexMap onLocationSelect={handleLocationSelect} />
      <GlobalInput
        label={"Joy haqida ma’lumotlar"}
        placeholder={"Joy haqida"}
        type={"textarea"}
        className={"mt-[32px]"}
        value={watchedFiles?.about || "" }
          register={{ ...register(`about`)}}
      />
    </div>
  );
}
