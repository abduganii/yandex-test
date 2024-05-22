import { useState } from "react";
import UploadFile from "../../../../ui/form/upload-file";
import { DeleteIcons, DeleteXIcons } from "../../../../ui/icons";

export default function ImageSection({setValue}) {
  const [file ,setFile] = useState(null)
  return (
    <div className="flex justify-center lg:justify-start  gap-[24px]">
      <UploadFile file={file}  setFile={setFile}  setValue={setValue} />
      {file && <div className="w-full max-w-[175px] relative ">
        <span  
        onClick={()=>setFile(null)}
        className="cursor-pointer absolute top-[8px] right-[8px] p-[5px] bg-white rounded-[15px] justify-start items-start gap-2.5 inline-flex"
        >
          <DeleteIcons />
        </span>
          <img  src={file} width={175} height={144} className="cursor-pointer w-full max-w-[175px] object-cover" style={{"aspectRatio":'1/.8'}} />
      </div>}
    
    </div>
  )
}
