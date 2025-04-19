import moment from "moment/moment";
import {CommentSummary} from "../../service/model/comment/commentSummary";
import styles from "./make-answer-button.module.css";
import React from "react";

type CommentProp = {
    comment: CommentSummary
}

export default function Answer({comment}: CommentProp) {
    const renderParentCommentInformation = () => {
        //bir yorumun root comment'i ile parent comment'i farkli ise, cevabin cevabidir
        if (comment?.rootComment?.id != comment.parentComment?.id) {
            const parentComment = comment?.parentComment;
            return (
                <p className="mb-1 small">
                    <a href="#" className="text-primary text-decoration-none">
                        @
                        {parentComment?.name +
                            " " +
                            parentComment?.lastName +
                            " - " +
                            parentComment?.email}
                    </a>
                </p>
            );
        } else {
            return null;
        }
    }

    return (
        <>
            <div
                key={comment.id}
                className={`mb-3 border border-1 rounded p-3 overflow-hidden ${styles.answer}`}
            >
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        {renderParentCommentInformation()}
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
                <hr/>
                <button
                    onClick={() => {
                    }}
                    className={`btn btn-sm btn-link p-0 m-0 ${styles.makeAnswer}`}
                >
                    <i className="bi bi-reply-fill me-1"></i>Yanıtla
                </button>
            </div>
        </>
    );

}