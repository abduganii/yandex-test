import axios from "axios";

export const FileUpload = async (data) => { 
    try {
        
        const response = await axios.post(`${import.meta.env.VITE_STORE_API}upload/image/`, data, {
            headers: {
                'Content-Type': "multipart/form-data",
        }},);
        return response?.data
        ;
    }
    catch (err) {
    console.log(err)
    }
}
export const FileRemove = async (body) => { 
    const response = await axios.delete(`${import.meta.env.VITE_STORE_API}remove`,{data:body});
    return response;
}