import Pageable from "../../service/model/pageable";
import {CommentSummary} from "../../service/model/comment/commentSummary";
import {getAnswersByParentCommentId} from "../../service/commentService";
import moment from "moment";
import Answer from "./Answer";
import React from "react";

type CommentProp = {
    comment: CommentSummary,
    answers: {[key: string]: Pageable<CommentSummary>} | null,
    comments: Pageable<CommentSummary> | null,
    setAnswers: React.Dispatch<React.SetStateAction<{ [key: string]: Pageable<CommentSummary>;} | null>>,
}

export default function Comment({comment, answers, comments, setAnswers}: CommentProp) {
    const moreAnswers = async (rootCommentId: string) => {
        let pageNumber = 0;
        let newAnswers: Pageable<CommentSummary> | null;
        if (answers && answers?.[rootCommentId]) {
            pageNumber = answers[rootCommentId]?.currentPage + 2;
        }
        const moreAnswers: Pageable<CommentSummary> =
            await getAnswersByParentCommentId(rootCommentId, pageNumber);
        if (answers && answers?.[rootCommentId]) {
            newAnswers = {
                ...answers[rootCommentId],
                elements: [
                    ...answers[rootCommentId]?.elements,
                    ...moreAnswers?.elements,
                ],
                hasNext: moreAnswers?.hasNext,
                hasPrevious: moreAnswers?.hasPrevious,
            };
        } else {
            newAnswers = moreAnswers;
        }
        setAnswers({
            ...answers,
            [rootCommentId]: newAnswers,
        });
    };

    const renderAnswers = (parentCommentId: string) => {
        const commentAnswers: CommentSummary[] | undefined = answers?.[parentCommentId]?.elements;
        return commentAnswers?.map((answer) => {
            return <Answer key={answer.id}
                           comment={answer}
            />
        });
    };

    const renderLoadAnswersButton = (comment: CommentSummary): boolean => {
        return answers?.[comment?.id] == undefined && comment?.amountOfAnswers > 0;
    };

    const renderLoadMoreAnswersButton = (comment: CommentSummary): boolean => {
        return answers?.[comment?.id] != undefined && answers?.[comment?.id]?.hasNext == true;
    }

    return (
        <div className="mb-3 border rounded p-3">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <strong>
                        {comment?.name + " " + comment?.lastName + " - " + comment?.email}
                    </strong>
                    <p className="mb-1 text-muted small">
                        📅 {moment(comment?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </p>
                </div>
                {comment?.amountOfAnswers > 0 && (
                    <span className="badge bg-light text-dark border">
                        <i className="bi bi-reply me-1"></i> {comment?.amountOfAnswers}{" "}yanıt
                    </span>
                )}
            </div>
            <p>{comment?.text}</p>
            <>
                {renderAnswers(comment.id)}
                {renderLoadAnswersButton(comment) && (
                    <>
                        <hr/>
                        <button
                            onClick={() => moreAnswers(comment?.id)}
                            className="btn btn-sm btn-link text-decoration-underline"
                        >
                            <i className="bi bi-arrow-return-right me-1"></i>
                            Yanıtları yükle
                        </button>
                    </>
                )}
            </>
            {renderLoadMoreAnswersButton(comment) ? (
                <button
                    onClick={() => moreAnswers(comment?.id)}
                    className="btn btn-sm btn-link text-decoration-underline"
                >
                    <i className="bi bi-three-dots me-1"></i>Daha fazla yanıt
                </button>
            ) : null}
        </div>
    )

}