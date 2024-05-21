import GlobalInput from "../../../../ui/form/global-input";
export default function LinksSection() {
    return (
      <div>
        <GlobalInput
          placeholder={"www.example.com"}
          label={"Web sayt uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"www.instagram.com"}
          label={"Instagram sahifasi uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"www.teleram.me"}
          label={"Telegram sahifasi uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"@telegram_bot"}
          label={"Telegram bot uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"www.facebook.com"}
          label={"Facebook sahifasi uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"www.twitter.com"}
          label={"Twitter sahifasi uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
          <GlobalInput
          placeholder={"www.youtube.com"}
          label={"Youtube sahifasi uchun havola"}
          options={[]} 
          className={'max-w-[298px] mb-[32px]'}
        />
      </div>
    )
  }
  