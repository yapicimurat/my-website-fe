import {useMemo, memo} from "react";
import {Comment as CommentModel} from "../../service/model/comment/comment";
import Comment from "../comment/comment";
import {ParentComment} from "../../service/model/comment/parentComment";
import useFetch from "../../hook/useFetch";

type CommentsProp = {
    fetchMethod: any,
    params: any
}
function Comments(props: CommentsProp) {
    const memorizedParamObject = useMemo(() => props.params, [JSON.stringify(props.params)]);
    const [loading, data] = useFetch<Array<CommentModel>>(props.fetchMethod, memorizedParamObject);


    const renderComments = () => {
        if(loading) {
            return (
                <p>Loading...</p>
            );
        }else if(!loading && (!Array.isArray(data) || data?.length === 0)) {
            return (
                <p>There is no comment here...</p>
            );
        }else {
            const comments: Array<CommentModel> = data as Array<CommentModel>;
            return comments.map(comment => {
                return (
                    <Comment key={comment.id} comment={comment} />
                );
            })
        }
    }


    return (
        <section className="row mt-3">
            {renderComments()}
        </section>
    );
}

export default memo(Comments);
