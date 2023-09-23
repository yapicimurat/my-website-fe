import {
    getWithPathVariable,
    getWithRequestParameter,
    postWithRequestParameter,
    postWithPathVariable,
    putWithRequestParameter,
    putWithPathVariable,
    deleteWithRequestParameter,
    deleteWithPathVariable
} from "../lib/axios";
import {DataResponse, Error, ErrorType, SuccessfulDataResponse} from "./response/response";
import {AxiosResponse, AxiosError, AxiosRequestConfig} from "axios";

const genericRequestHandler = async <T>(axiosResponse: Promise<AxiosResponse>): Promise<DataResponse<T>> => {
    return axiosResponse
        .then(response => {
            const dataResponse = response.data as DataResponse<Array<T>>;
            return Promise.resolve(new SuccessfulDataResponse(dataResponse.message, dataResponse.data));
        })
        .catch((error: AxiosError) => {
            return Promise.reject(new Error(error.message, ErrorType.ERROR));
        });
}

const getAllWithRequestParameter = async <T extends Object>(url: string,
                                requestParameters: {[key: string]: any} = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(getWithRequestParameter(url, requestParameters));
};

const getAllWithPathVariable = async <T extends Object>(url: string,
                                    pathVariables: {[key: string]: any} = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(getWithPathVariable(url, pathVariables));
};

const getSingleWithRequestParameter = async <T extends Object>(url: string,
                                       requestParameters: {[key: string]: any} = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(getWithRequestParameter(url, requestParameters));
};

const getSingleWithPathVariable = async <T extends Object>(url: string,
                                       pathVariables: {[key: string]: any} = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(getWithPathVariable(url, pathVariables));
};

const postAllWithRequestParameter = async <T extends Object>(url: string,
                                                          requestParameters: {[key: string]: any} = {},
                                                          requestBody: Object,
                                                          config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(postWithRequestParameter(url, requestParameters, requestBody, config));
};

const postAllWithPathVariable = async <T extends Object>(url: string,
                                                             pathVariables: {[key: string]: any} = {},
                                                             requestBody: Object,
                                                             config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(postWithPathVariable(url, pathVariables, requestBody, config));
};

const postSingleWithRequestParameter = async <T extends Object>(url: string,
                                                             requestParameters: {[key: string]: any} = {},
                                                             requestBody: Object,
                                                             config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(postWithRequestParameter(url, requestParameters, requestBody, config));
};

const postSingleWithPathVariable = async <T extends Object>(url: string,
                                                         pathVariables: {[key: string]: any} = {},
                                                         requestBody: Object,
                                                         config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(postWithPathVariable(url, pathVariables, requestBody, config));
};


const putAllWithRequestParameter = async <T extends Object>(url: string,
                                                            requestParameters: {[key: string]: any} = {},
                                                            requestBody: Object,
                                                            config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(putWithRequestParameter(url, requestParameters, requestBody, config));
};

const putAllWithPathVariable = async <T extends Object>(url: string,
                                                        pathVariables: {[key: string]: any} = {},
                                                        requestBody: Object,
                                                        config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(putWithPathVariable(url, pathVariables, requestBody, config));
};

const putSingleWithRequestParameter = async <T extends Object>(url: string,
                                                               requestParameters: {[key: string]: any} = {},
                                                               requestBody: Object,
                                                               config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(putWithRequestParameter(url, requestParameters, requestBody, config));
};

const putSingleWithPathVariable = async <T extends Object>(url: string,
                                                           pathVariables: {[key: string]: any} = {},
                                                           requestBody: Object,
                                                           config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(putWithPathVariable(url, pathVariables, requestBody, config));
};


const deleteAllWithRequestParameter = async <T extends Object>(url: string,
                                                requestParameters: {[key: string]: any} = {},
                                                config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(deleteWithRequestParameter(url, requestParameters, config));
};

const deleteAllWithPathVariable = async <T extends Object>(url: string,
                                               pathVariables: {[key: string]: any} = {},
                                               config: AxiosRequestConfig = {}): Promise<DataResponse<Array<T>>> => {
    return genericRequestHandler<Array<T>>(deleteWithPathVariable(url, pathVariables, config));
};

const deleteSingleWithRequestParameter = async <T extends Object>(url: string,
                                                       requestParameters: {[key: string]: any} = {},
                                                       config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(deleteWithRequestParameter(url, requestParameters, config));
};

const deleteSingleWithPathVariable = async <T extends Object>(url: string,
                                                       pathVariables: {[key: string]: any} = {},
                                                       config: AxiosRequestConfig = {}): Promise<DataResponse<T>> => {
    return genericRequestHandler<T>(deleteWithPathVariable(url, pathVariables, config));
};

export const GET_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: getAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: getAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: getSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: getSingleWithPathVariable,
};

export const POST_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: postAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: postAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: postSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: postSingleWithPathVariable,
};

export const PUT_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: putAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: putAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: putSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: putSingleWithPathVariable,
};

export const DELETE_REQUEST = {
    ALL_WITH_REQUEST_PARAMETER: deleteAllWithRequestParameter,
    ALL_WITH_PATH_VARIABLE: deleteAllWithPathVariable,
    SINGLE_WITH_REQUEST_PARAMETER: deleteSingleWithRequestParameter,
    SINGLE_WITH_PATH_VARIABLE: deleteSingleWithPathVariable,
};
