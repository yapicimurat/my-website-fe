import {DataResponse} from "./response/response";
import {GET_REQUEST} from "./genericService";
import {Comment} from "./model/comment/comment"

export const getAllByArticleId = async (articleId: string): Promise<Array<Comment>> => {
    const result: DataResponse<Array<Comment>> = await GET_REQUEST.ALL_WITH_PATH_VARIABLE("/article/{articleId}/comment", {articleId});
    return result.data;
};

