import GlobalInput from "../../../../ui/form/global-input";

export default function FullNameSection() {
  return (
    <>
       <GlobalInput
                  className={'max-w-[298px] mb-[32px]'}
                  type="text"
                  placeholder={'Familiya va ism'}
                  label={"Familiya va ism"}
            />
        <GlobalInput
            className={'max-w-[298px]'}
            type="tel"
            placeholder={'+998'}
            label={"Telefon raqami"} 
            mask="+\9\9\8-99-999-99-99"
            />
    </>
  )
}
