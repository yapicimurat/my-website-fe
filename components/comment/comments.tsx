import Comment from "./comment";
import {useEffect} from "react";
import {getAllByArticleId} from "../../service/commentService";
import {Comment as CommentModel} from "../../service/model/comment/comment";
import {useRouter} from "next/router";

type CommentsProp = {
    articleId: string
}

export default function Comments(props: CommentsProp) {

    useEffect(() => {
        getAllByArticleId(props.articleId)
            .then(response => {
                console.log(response)
            })
    }, []);

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