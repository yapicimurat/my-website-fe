import Link from "next/link";
import { clampStr } from "../../util/util";
import moment from "moment/moment";
import { ArticleSummary } from "../../service/model/article/articleSummary";

type ArticleCardProp = {
  article: ArticleSummary;
};

export default function ArticleCard(props: ArticleCardProp) {
  const renderCategories = () => {
    const categories = props?.article?.categories;
    if (categories?.length > 0) {
      return (
        <div className="d-flex flex-wrap gap-1">
          {categories.map((category) => (
            <span className="badge bg-primary">{category}</span>
          ))}
        </div>
      );
    }
    return null;
  };

  if (props?.article) {
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{props.article.title}</h5>
          <p className="card-text">
            {clampStr(props.article.description, 200)}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted me-3">
                🗨️ {props.article.totalComments} comment{props.article.totalComments !== 1 ? 's' : ''}
              </small>
              <small className="text-muted">
                {moment(props.article.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </small>
            </div>
            <Link
              href={"/articles/" + props.article?.id}
              className="btn btn-sm btn-outline-primary"
            >
              Read Article
            </Link>
          </div>
          {renderCategories()}
        </div>
      </div>
    );
  }
  return null;
}
