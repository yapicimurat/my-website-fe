import {DataResponse} from "./response/response";
import {GET_REQUEST} from "./genericService";
import {Article} from "./model/article";
import Pageable from "./model/pageable";

/*
const create = <T>(articleCreateRequest: ArticleCreateRequest): DataResponse<T> =>  {
    return null;
};
*/


export const getAll = async (): Promise<Pageable<Article>> => {
    const result: DataResponse<Pageable<Article>> = await GET_REQUEST.SINGLE_WITH_REQUEST_PARAMETER("/article", {page: 0});
    return result.data;
};

/*
const getAllById = (id: number) => {

};
*/
