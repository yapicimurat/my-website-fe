import moment from "moment/moment";
import {CommentSummary} from "../../service/model/comment/commentSummary";
import Pageable from "../../service/model/pageable";

type CommentProp = {
    comment: CommentSummary,
    answers: {[key: string]: Pageable<CommentSummary>} | null,
    comments: Pageable<CommentSummary> | null,
    parentCommentId: string,
    moreAnswers: (commentId: string) => Promise<void>,
}

export default function Answer({comment, answers, parentCommentId, moreAnswers}: CommentProp) {

    //TODO: Bu metoda useCallback uygula
    const renderLoadMoreAnswersButton = (comment: CommentSummary): boolean => {
        return answers?.[comment?.parentCommentId] != undefined && answers?.[comment?.parentCommentId]?.hasNext == true;
    }


    return (
        <>
            <div
                key={comment.id}
                className="mb-3 border rounded p-3 border-light bg-light"
            >
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        {/* Kime yanıt verildiği bilgisi */}
                        <p className="mb-1 small">
                            <a href="#" className="text-primary text-decoration-none">
                                @
                                {comment?.name +
                                    " " +
                                    comment?.lastName +
                                    " - " +
                                    comment?.email}
                            </a>
                        </p>
                        <strong>
                            {comment?.name +
                                " " +
                                comment?.lastName +
                                " - " +
                                comment?.email}
                        </strong>
                        <p className="mb-1 text-muted small">
                            📅{" "}
                            {moment(comment?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                        </p>
                    </div>
                </div>
                <p>{comment?.text}</p>
            </div>
            {renderLoadMoreAnswersButton(comment) ? (
                <button
                    onClick={() => moreAnswers(parentCommentId)}
                    className="btn btn-sm btn-link text-decoration-underline mb-3"
                >
                    <i className="bi bi-three-dots me-1"></i>Daha fazla yanıt
                </button>
            ) : null}
            <button
                onClick={() => {}}
                className="btn btn-sm btn-outline-secondary mb-3"
            >
                <i className="bi bi-reply-fill me-1"></i>Yanıt Yaz
            </button>
        </>
    );

}