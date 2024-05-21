import GlobalInput from "../../../../ui/form/global-input";

export default function FullNameSection({ register, watchedFiles }) {
  return (
    <>
      <GlobalInput
        className={"max-w-[298px] mb-[32px]"}
        type="text"
        placeholder={"Familiya va ism"}
        label={"Familiya va ism"}
        value={watchedFiles?.user_name || ""}
        register={{ ...register(`user_name`) }}
      />
      <GlobalInput
        className={"max-w-[298px]"}
        type="tel"
        placeholder={"+998"}
        label={"Telefon raqami"}
        mask="+\9\9\8-99-999-99-99"
        value={watchedFiles?.user_phone || ""}
        register={{ ...register(`user_phone`) }}
      />
    </>
  );
}
