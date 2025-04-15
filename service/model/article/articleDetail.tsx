import { Category } from "../category/category";
import { CommentSummary } from "../comment/commentSummary";
import Pageable from "../pageable";

export type ArticleDetail = {
    id: string,
    title: string,
    description: string,
    readTimeInMinute: number,
    coverImageURL: string,
    htmlContent: string,
    categories: Category[],
    comments: Pageable<CommentSummary>,
    totalCommentCount: number,
    createdAt: string
}