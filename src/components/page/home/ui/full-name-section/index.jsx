import GlobalInput from "../../../../ui/form/global-input";

export default function FullNameSection({ register,errors,setError, watchedFiles }) {
  return (
    <>
      <GlobalInput
        className={"sm:max-w-[298px] mb-[32px]"}
        type="text"
        placeholder={"Familiya va ism"}
        label={"Familiya va ism"}
        value={watchedFiles?.user_name || ""}
        register={{ ...register(`user_name`, { required: 'This field is required' }) }}
        errors={errors?.user_name?.message && errors?.user_name?.message}
        onKeyDown={()=>setError('user_name',null)}
      />
      <GlobalInput
        className={"sm:max-w-[298px]"}
        type="tel"
        placeholder={"+998"}
        label={"Telefon raqami"}
        mask="+\9\9\8-99-999-99-99"
        value={watchedFiles?.user_phone || ""}
        register={{ ...register(`user_phone`, { required: 'This field is required' }) }}
        errors={errors?.user_phone?.message && errors?.user_phone?.message}
        onKeyDown={()=>setError('user_phone',null)}
      />
    </>
  );
}
