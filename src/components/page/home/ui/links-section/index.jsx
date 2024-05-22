import GlobalInput from "../../../../ui/form/global-input";
export default function LinksSection({ register, watchedFiles }) {
  return (
    <div>
      <GlobalInput
        placeholder={"www.example.com"}
        label={"Web sayt uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.website || ""}
        register={{ ...register(`website`) }}
      />
      <GlobalInput
        placeholder={"www.instagram.com"}
        label={"Instagram sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.instagram || ""}
        register={{ ...register(`instagram`) }}
      />
      <GlobalInput
        placeholder={"www.teleram.me"}
        label={"Telegram sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.telegram || ""}
        register={{ ...register(`telegram`) }}
      />
      <GlobalInput
        placeholder={"@telegram_bot"}
        label={"Telegram bot uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.telegram_bot || ""}
        register={{ ...register(`telegram_bot`) }}
      />
      <GlobalInput
        placeholder={"www.facebook.com"}
        label={"Facebook sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.facebook || ""}
        register={{ ...register(`facebook`) }}
      />
      <GlobalInput
        placeholder={"www.twitter.com"}
        label={"Twitter sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.twitter || ""}
        register={{ ...register(`twitter`) }}
      />
      <GlobalInput
        placeholder={"www.youtube.com"}
        label={"Youtube sahifasi uchun havola"}
        options={[]}
        className={"sm:max-w-[298px] mb-[32px]"}
        value={watchedFiles?.youtube || ""}
        register={{ ...register(`youtube`) }}
      />
    </div>
  );
}
