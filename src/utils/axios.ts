import axios, { AxiosInstance } from 'axios';

let instance: AxiosInstance;

export function instanceAxios(): AxiosInstance {
    if (!instance) {
        instance = axios.create({
            baseURL: 'https://api.test.ifin.app/api',
            responseType: 'json',
        });
    }

    return instance;
}
