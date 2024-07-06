import {DataResponse} from "./response/response";
import {GET_REQUEST} from "./genericService";
import {Comment} from "./model/comment/comment"

interface GetAllByArticleIdParameter {
    articleId: string
}

export const getAllByArticleId = async (getAllByArticleIdParameter: GetAllByArticleIdParameter): Promise<Array<Comment>> => {
    const result: DataResponse<Array<Comment>> = await GET_REQUEST.ALL_WITH_PATH_VARIABLE("/comment/article/{articleId}/comment", getAllByArticleIdParameter);
    return result.data;
};

