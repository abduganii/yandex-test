import api from "./api";

export const GetAllData = async (url, query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}?${params.toString()}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const GetAllByLang = async (url, lang) => {
  try {
    const response = await api.get(`/${url}/${lang}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetByIdData = async (url, id,query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}/${id}?${params.toString()}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const GetBySlugData = async (url, slug,query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}/${slug}?${params.toString()}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const GetByMenuData = async (url,id, menu,query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}/${id}/${menu}?${params.toString()}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const GetByMenuData1 = async (url, menu,query) => {
  try {
    const params = new URLSearchParams(query);
    const response = await api.get(`/${url}/${menu}?${params.toString()}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const AddData = async (url, data) => {
  const response = await api.post(`/${url}`, data);
  return response;
};

export const UpdateData = async (url, data, id) => {
  const response = await api.put(`/${url}/${id}`, data);
  return response;
};
export const UpdateDatawithOut = async (url, data) => {
  const response = await api.put(`/${url}`, data);
  return response;
};
export const UpdateData1 = async ( data, id) => {
  const response = await api.put(`/${id}`, data);
  return response;
};
export const DeleteData = async (url, id) => {
  try {
    const response = await api.delete(`${url?`/${url}` :''}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

