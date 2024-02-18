import {DataResponse} from "./response/response";
import {GET_REQUEST} from "./genericService";
import {Article} from "./model/article";
import Pageable from "./model/pageable";

export const getAll = async (page: number = 0): Promise<Pageable<Article>> => {
    const result: DataResponse<Pageable<Article>> = await GET_REQUEST.SINGLE_WITH_REQUEST_PARAMETER("/article", {page});
    return result.data;
};

