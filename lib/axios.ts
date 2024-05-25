import {default as axiosConfig} from "../config/axios";
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";


const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((request) => {
   return request;
}, (error) => {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error: AxiosError) => {
    //use next global states to send message error in bootstrap modal???
    console.log(error);
    alert("dasda");
});

const createFullURLForRequestParameter = (requestParameters: {[key: string]: any}): string => {
    let result: string = "?";
    Object.keys(requestParameters).forEach(key => {
        result = result + key + "=" + requestParameters[key] + "&";
    });
    return result.substring(0, result.length - 1); //remove last "&"
};

const createFullURLForPathVariable = (pathVariables: {[key: string]: any}) => {
    //burada key'lere ihtiyac yok ama gonderirken ne icin hangi degeri yazdigimi rahatca bilebilirim diye koydum
    let result: string = "/";
    Object.keys(pathVariables).forEach(key => {
        result = result + pathVariables[key] + "/";
    });
    return result.substring(0, result.length - 1); //remove last "/"
}

export const getWithRequestParameter = (url: string, requestParameters: {[key: string]: any},
                                    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    let fullURL = url + createFullURLForRequestParameter(requestParameters);
    if(Object.keys(config).length === 0) {
        return axiosInstance.get(fullURL);
    }else {
        return axiosInstance.get(fullURL, config);
    }
}

export const getWithPathVariable = (url: string, pathVariables: {[key: string]: any},
                                    config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForPathVariable(pathVariables);
    debugger;
    if(Object.keys(config).length === 0) {
        return axiosInstance.get(fullURL);
    }else {
        return axiosInstance.get(fullURL, config);
    }
}

export const postWithRequestParameter = (url: string,
                             requestParameters: {[key: string]: any},
                             requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForRequestParameter(requestParameters);
    if(Object.keys(config).length === 0) {
        return axiosInstance.post(fullURL,requestBody);
    }else {
        return axiosInstance.post(fullURL, requestBody, config);
    }
};

export const postWithPathVariable = (url: string,
                             pathVariables: {[key: string]: any},
                             requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForPathVariable(pathVariables);
    if(Object.keys(config).length === 0) {
        return axiosInstance.post(fullURL,requestBody);
    }else {
        return axiosInstance.post(fullURL, requestBody, config);
    }
};

export const putWithRequestParameter = (url: string,
                                         requestParameters: {[key: string]: any},
                                         requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForRequestParameter(requestParameters);
    if(Object.keys(config).length === 0) {
        return axiosInstance.put(fullURL,requestBody);
    }else {
        return axiosInstance.put(fullURL, requestBody, config);
    }
};

export const putWithPathVariable = (url: string,
                                     pathVariables: {[key: string]: any},
                                     requestBody: Object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForPathVariable(pathVariables);
    if(Object.keys(config).length === 0) {
        return axiosInstance.put(fullURL,requestBody);
    }else {
        return axiosInstance.put(fullURL, requestBody, config);
    }
};

export const deleteWithRequestParameter = (url: string,
                                           requestParameters: {[key: string]: any},
                                           config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForRequestParameter(requestParameters);
    if(Object.keys(config).length === 0) {
        return axiosInstance.delete(fullURL, config);
    }else {
        return axiosInstance.delete(fullURL);
    }
};

export const deleteWithPathVariable = (url: string,
                                           pathVariables: {[key: string]: any},
                                           config: AxiosRequestConfig = {}): Promise<AxiosResponse> => {
    const fullURL = url + createFullURLForPathVariable(pathVariables);
    if(Object.keys(config).length === 0) {
        return axiosInstance.delete(fullURL, config);
    }else {
        return axiosInstance.delete(fullURL);
    }
};
