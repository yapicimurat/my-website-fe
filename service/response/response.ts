interface Response {
    message: string,
    isSuccess: boolean
}

interface DataResponse<T> extends Response {
    data: T
}

enum ErrorType {
    WARNING,
    ERROR
}

interface ErrorResponse extends Response {
    errorType?: ErrorType
}

class SuccessfulDataResponse<T> implements DataResponse<T> {
    public message: string;
    public isSuccess: boolean;
    public data: any;

    constructor(message: string, data: any) {
        this.message = message;
        this.data = data;
        this.isSuccess = true;
    }
}

class SuccessfulResponse implements Response {
    public isSuccess: boolean;
    public message: string;

    constructor(message: string) {
        this.message = message;
        this.isSuccess = true;
    }
}

class Error implements ErrorResponse {
    errorType: ErrorType;
    message: string;
    isSuccess: boolean;

    constructor(message: string, errorType: ErrorType = ErrorType.ERROR) {
        this.message = message;
        this.errorType = errorType;
        this.isSuccess = false;
    }
}

export type {
    Response,
    DataResponse
};

export {
    SuccessfulResponse,
    SuccessfulDataResponse,
    Error,
    ErrorType
};
