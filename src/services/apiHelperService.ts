import axios from './axios';
import qs from 'qs';

export const getRequest = (url: string, params?: any): Promise<any> => {
    return axios.get(url, {
        params: params,
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    }).then(res => res.data);
}

export const postRequest = (url: string, data?: any): Promise<any> => {
    return axios.post(url, data).then(res => res.data);
}

export const patchRequest = (url: string, id: string, data: any): Promise<any> => {
    return axios.patch(`${url}/${id}`, data).then(res => res.data);
}

export const deleteRequest = (url:string, id: string): Promise<any> => {
    return axios.delete(`${url}/${id}`).then(res => res.data);
}