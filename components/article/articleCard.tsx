import {Article} from "../../service/model/article/article";
import {clampStr} from "../../util/util";
import moment from "moment/moment";
import Link from "next/link";

type ArticleCardProp = {
    article: Article
}

export default function ArticleCard(props: ArticleCardProp) {
    return (
        <Link href={"/articles/" + props.article.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 text-decoration-underline">{props.article.title}</h5>
                <small className="text-black">
                    {moment(new Date(props.article.createdAt)).format("DD.MM.YYYY")}
                </small>
            </div>
            <p className="mb-1">{props.article.description}</p>
            <small className="text-body-secondary" style={{fontSize: ".75rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock mb-1" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
                &nbsp;
                {props.article.readTimeInMinute} dakika tahmini okuma süresi
            </small>
            <small className="badge text-bg-light border border-1 float-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                </svg>
                &nbsp;
                {props.article.amountOfAnswers}
            </small>
        </Link>

    )
}
