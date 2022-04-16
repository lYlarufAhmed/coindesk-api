import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';



const headers: Readonly<Record<string, string | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest",
};

class Axios {
    private instance: AxiosInstance | null = null;

    private get http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initAxios();
    }

    initAxios() {
        const http = axios.create({
            baseURL: "https://api.coindesk.com/v1/",
            headers,
            withCredentials: true,
        });

        this.instance = http;
        return http;
    }

    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get<T, R>(url, config);
    }


}

export const api = new Axios();