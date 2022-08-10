import axios from './axios';

export const getRequest = (url: string): Promise<any> => {
    return axios.get(url).then(res => res.data);
}

export const postRequest = (url: string, data?: any): Promise<any> => {
    return axios.post(url, data).then(res => res.data);
}

export const deleteRequest = (url: string, id: any): Promise<any> => {
    return axios.delete(url, id).then(res => res.data);
}