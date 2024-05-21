import GlobalInput from "../../../../ui/form/global-input";

export default function NameSection({register,watchedFiles}) {
  return (
    <>
       <GlobalInput
          className={'max-w-[298px] mb-[32px]'}
          type="text"
          placeholder={'joy nomi'}
          label={"Joy nomi"}
          value={watchedFiles?.name || "" }
          register={{ ...register(`name`)}}
            />
        <GlobalInput
            className={'max-w-[298px]'}
            type="tel"
            placeholder={'+998'}
            label={"Telefon raqami"} 
            mask="+\9\9\8-99-999-99-99"
            value={watchedFiles?.phone ||"" }
            register={{...register(`phone`) }}
            />
    </>
  )
}
