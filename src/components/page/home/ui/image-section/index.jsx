import { useState } from "react";
import UploadFile from "../../../../ui/form/upload-file";
import { DeleteIcons, DeleteXIcons } from "../../../../ui/icons";

export default function ImageSection({setValue}) {
  const [file ,setFile] = useState(null)
  return (
    <div className="flex gap-[24px]">
      <UploadFile setFile={setFile}  setValue={setValue} />
      {file && <div className="w-full max-w-[175px] relative ">
        <span  
        onClick={()=>setFile(null)}
        className="cursor-pointer absolute top-[8px] right-[8px] p-[5px] bg-white rounded-[15px] justify-start items-start gap-2.5 inline-flex"
        >

        <DeleteIcons/></span>
          <img  src={file} width={175} height={144} className="cursor-pointer w-full " />
      </div>}
      {/* <div className="fixed flex justify-center items-center w-screen h-screen top-0 left-0" style={{ backgroundColor: `rgb(0, 0, 0, .5 )` }}>
        <span className="text-white text-3xl fixed top-[120px] right-[180px] cursor-pointer">X </span>
        <img src="/Rectangle18.png" width={500} className="cursor-pointer w-full max-w-[500px]" />
      </div> */}
    </div>
  )
}
