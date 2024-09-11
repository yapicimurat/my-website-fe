import {DataResponse} from "./response/response";
import {GET_REQUEST, POST_REQUEST} from "./genericService";
import {Comment} from "./model/comment/comment"
import {ParentComment} from "./model/comment/parentComment";

interface ArticleIdParameter {
    articleId: string
}

export interface CommentIdParameter {
    commentId: string
}

export interface CommentRequestInput {
    name: string,
    lastName: string,
    email: string,
    text: string,
    isAnswer: boolean,
    parentCommentId: string
}

export const getAllByArticleId = async (getAllByArticleIdParameter: ArticleIdParameter): Promise<Array<ParentComment>> => {
    const result: DataResponse<Array<ParentComment>> = await GET_REQUEST.ALL_WITH_PATH_VARIABLE("/comment/article/{articleId}/comment", getAllByArticleIdParameter);
    return result.data;
};

export const getCommentAnswersByCommentId = async (commentIdParameter: CommentIdParameter): Promise<Array<Comment>> => {
    const result: DataResponse<Array<Comment>> = await GET_REQUEST.ALL_WITH_PATH_VARIABLE("/comment/{commentId}/answers", commentIdParameter);
    return result.data;
};

export const makeAnswer = async (commentIdParameter: CommentIdParameter, commentRequestInput: CommentRequestInput): Promise<Comment> => {
    const result: DataResponse<Comment> = await POST_REQUEST.SINGLE_WITH_PATH_VARIABLE("/comment/{commentId}/answer", commentIdParameter, commentRequestInput);
    return result.data;
}

