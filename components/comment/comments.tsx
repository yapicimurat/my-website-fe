import Comment from "./comment";
import {useCallback, useEffect, useMemo} from "react";
import {getAllByArticleId} from "../../service/commentService";
import {Comment as CommentModel} from "../../service/model/comment/comment";
import {useGeneralStore} from "../../store";
import useFetch from "../../hook/useFetch";

export default function Comments() {
    const selectedArticleId = useGeneralStore(state => state.selectedArticleId);
    const fetchHook = useMemo(() => useFetch<Array<CommentModel>>(getAllByArticleId, {articleId: selectedArticleId}),[selectedArticleId]);


    /*
    const renderComments = () => {
        if(loading) {
            return (
                <p>Loading...</p>
            )
        }else if(!loading && (!Array.isArray(data) || data?.length > 0)) {
            return (
                <p>There is no comment here...</p>
            )
        }else {
            const comments: Array<CommentModel> = data as Array<CommentModel>;
            comments.map(comment => {
                return (
                    <Comment key={comment.id} answer={Boolean(comment.isAnswer)}/>
                )
            })
        }
    }
    */

    return (
        <section className="row mt-3">
            <h3 className="p-0 border-bottom border-1">Yorumlar</h3>
            <Comment/>
            <Comment answer={true}/>
            <Comment/>
            <Comment/>
            <Comment/>
        </section>
    );
}