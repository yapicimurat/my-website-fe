import {Article} from "../../service/model/article";
import {clampStr} from "../../util/util";

type ArticleCardProp = {
    article: Article
}

export default function ArticleCard(props: ArticleCardProp) {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="card bg-light">
                <img src="/example.png" alt="no image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.article.title}</h5>
                    <p className="card-text">
                        {clampStr(props.article.description, 20)}
                    </p>
                    <a href="#" className="btn btn-sm btn-primary">Yazıyı Oku</a>
                </div>
            </div>
        </div>
    );
}
