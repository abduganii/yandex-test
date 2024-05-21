import { UploadFileIcons } from "../../icons";

export default function UploadFile() {
  return (
    <label class="w-full cursor-pointer max-w-[175px] h-36 px-6 py-4 bg-zinc-800/opacity-20 rounded-xl border border-zinc-700 flex-col justify-start items-center gap-1 inline-flex">
    <div class="self-stretch h-28 flex-col justify-start items-center gap-3 flex">
        <div class="w-10 h-10 p-2.5 rounded-lg shadow border border-zinc-700 justify-center items-center inline-flex">
        <UploadFileIcons/>
        </div>
        <div class="self-stretch h-[60px] flex-col justify-start items-center gap-1 flex">
            <div class="self-stretch justify-center items-start gap-1 inline-flex">
                <div class="grow shrink basis-0 text-center text-white text-sm font-medium  leading-tight">Rasm yuklang</div>
            </div>
            <div class="self-stretch text-center text-neutral-400 text-xs font-normal  leading-[18px]">PNG yoki JPG   (max. 800x400px)</div>
        </div>
          </div>
          <input type={"file"}  className="hidden"/>
</label>
  )
}
