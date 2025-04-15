import {DataResponse} from "./response/response";
import {GET_REQUEST} from "./genericService";
import { ArticleSummary } from "./model/article/articleSummary";
import Pageable from "./model/pageable";
import { ArticleDetail } from "./model/article/articleDetail";

export const getAll = async (page: number = 0): Promise<Pageable<ArticleSummary>> => {
    const result: DataResponse<Pageable<ArticleSummary>> = await GET_REQUEST.SINGLE_WITH_REQUEST_PARAMETER("/article", {page});
    return result.data;
};

export const getById = async (id: string): Promise<ArticleDetail> => {
    const result: DataResponse<ArticleDetail> = await GET_REQUEST.SINGLE_WITH_PATH_VARIABLE("/article/{id}", {id});
    return result.data;
}

