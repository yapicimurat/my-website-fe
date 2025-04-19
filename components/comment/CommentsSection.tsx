import {useEffect, useState} from "react";
import Pageable from "../../service/model/pageable";
import {CommentSummary} from "../../service/model/comment/commentSummary";
import {getCommentsByArticle} from "../../service/commentService";
import {ArticleDetail} from "../../service/model/article/articleDetail";
import Comment from "./Comment";

type CommentsSectionProp = {
    article: ArticleDetail,
}

export default function CommentsSection({article}: CommentsSectionProp): JSX.Element {
    const [comments, setComments] = useState<Pageable<CommentSummary> | null>(
        null
    );
    const [answers, setAnswers] = useState<{ [key: string]: Pageable<CommentSummary>;} | null>(null);

    useEffect(() => {
        setComments(article?.comments);
    }, []);

    const renderComment = (comment: CommentSummary) => {
        return (
            <Comment
                key={comment?.id}
                comment={comment}
                answers={answers}
                setAnswers={setAnswers}
                comments={comments}
            />
        );
    };

    const renderMoreCommentsButton = () => {
        if (comments?.hasNext) {
            return (
                <div className="text-center mb-5">
                    <button
                        onClick={fetchMoreComments}
                        className="btn btn-sm btn-outline-secondary px-4 py-2"
                    >
                        <i className="bi bi-chat-square-text me-2"></i>Daha Fazla Yükle
                    </button>
                </div>
            );
        }
        return null;
    };

    const fetchMoreComments = async () => {
        if (comments?.hasNext === true) {
            const nextPage: number = comments?.currentPage + 2;
            const moreComments: Pageable<CommentSummary> = await getCommentsByArticle(
                article?.id,
                nextPage
            );
            if (moreComments) {
                setComments((prevComments) => {
                    if (prevComments) {
                        return {
                            ...prevComments,
                            currentPage: moreComments?.currentPage,
                            hasNext: moreComments?.hasNext,
                            hasPrevious: moreComments?.hasPrevious,
                            elements: [...prevComments.elements, ...moreComments.elements],
                        } as Pageable<CommentSummary>;
                    }
                    return null;
                });
            }
        }
    };

    const renderComments = (article: ArticleDetail): JSX.Element => {
        let commentSection: JSX.Element[] | null = null;
        if (comments && comments?.elements?.length > 0) {
            commentSection = comments?.elements?.map((comment) => {
                return renderComment(comment);
            });
        } else {
            return (
                <div className="card border-0 shadow-sm my-4">
                    <div className="card-body text-center py-5">
                        <div className="mb-4">
                            <i
                                className="bi bi-chat-square-text text-muted"
                                style={{ fontSize: "3rem" }}
                            ></i>
                        </div>
                        <h4 className="text-muted mb-3">Henüz yorum yapılmamış</h4>
                        <p className="text-muted mb-4">
                            Bu içerik hakkında ilk yorumu siz yapabilirsiniz.
                        </p>
                        <button className="btn btn-primary px-4">
                            <i className="bi bi-plus-circle me-2"></i>Yorum Yap
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="comments-section">
                <h4 className="mb-3">Yorumlar ({article?.totalCommentCount})</h4>
                {commentSection}
                {renderMoreCommentsButton()}
                <form className="mt-4">
                    <div className="mb-3">
                        <div
                            className="alert alert-primary d-flex align-items-center"
                            role="alert"
                        >
                            <i className="bi bi-info-circle me-1"></i> Girdiğiniz ad-soyad ve
                            e-posta bilgileriniz yorumunuzla birlikte görünür olacaktır. Yorum
                            yaptığınızda bunları kabul etmiş olursunuz.
                        </div>
                        <label className="form-label">Yorumunuz</label>
                        <textarea
                            rows={5}
                            className="form-control"
                            id="comment"
                            placeholder="Yorumunuzu yazın..."
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Yorum Gönder
                    </button>
                </form>
            </div>
        );
    };
    return renderComments(article);
}