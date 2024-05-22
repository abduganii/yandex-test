import GlobalInput from "../../../../ui/form/global-input";
export default function LinksSection({
  register,
  watchedFiles,
  errors,
  setError
}) {
  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/;

  const validateURL = (value) => {
    return urlRegex.test(value) || "URL shuold start with https";
  };
  return (
    <div>
      <GlobalInput
        placeholder={"www.example.com"}
        label={"Web sayt uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.website || ""}
        register={{ ...register(`website`, { validate: validateURL }) }}
        errors={errors?.website?.message && errors?.website?.message}
        onKeyDown={() => setError("website", null)}
      />
      <GlobalInput
        placeholder={"www.instagram.com"}
        label={"Instagram sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.instagram || ""}
        register={{ ...register(`instagram`, { validate: validateURL }) }}
        errors={errors?.instagram?.message && errors?.instagram?.message}
        onKeyDown={() => setError("instagram", null)}
      />
      <GlobalInput
        placeholder={"www.teleram.me"}
        label={"Telegram sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.telegram || ""}
        register={{ ...register(`telegram`, { validate: validateURL }) }}
        errors={errors?.telegram?.message && errors?.telegram?.message}
        onKeyDown={() => setError("telegram", null)}
      />
      <GlobalInput
        placeholder={"@telegram_bot"}
        label={"Telegram bot uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.telegram_bot || ""}
        register={{ ...register(`telegram_bot`, { validate: validateURL }) }}
        errors={errors?.telegram_bot?.message && errors?.telegram_bot?.message}
        onKeyDown={() => setError("telegram_bot", null)}
      />
      <GlobalInput
        placeholder={"www.facebook.com"}
        label={"Facebook sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.facebook || ""}
        register={{ ...register(`facebook`, { validate: validateURL }) }}
        errors={errors?.facebook?.message && errors?.facebook?.message}
        onKeyDown={() => setError("facebook", null)}
      />
      <GlobalInput
        placeholder={"www.twitter.com"}
        label={"Twitter sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.twitter || ""}
        register={{ ...register(`twitter`, { validate: validateURL }) }}
        errors={errors?.twitter?.message && errors?.twitter?.message}
        onKeyDown={() => setError("twitter", null)}
      />
      <GlobalInput
        placeholder={"www.youtube.com"}
        label={"Youtube sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.youtube || ""}
        register={{ ...register(`youtube`, { validate: validateURL }) }}
        errors={errors?.youtube?.message && errors?.youtube?.message}
        onKeyDown={() => setError("youtube", null)}
      />
    </div>
  );
}
