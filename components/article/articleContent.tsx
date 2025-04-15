import { useGeneralStore } from "../../store";
import { getById } from "../../service/articleService";
import useFetchWithCondition from "../../hook/useFetchWithCondition";
import moment from "moment";
import { ArticleContentPlaceholder } from "./articleContentPlaceholder";
import { ArticleDetail } from "../../service/model/article/articleDetail";
import CommentsSection from "../comment/CommentsSection";

export default function ArticleContent(): JSX.Element | null {
  const selectedArticleId = useGeneralStore((state) => state.selectedArticleId);
  const [loading, data] = useFetchWithCondition<ArticleDetail>(
    getById,
    () => (!!selectedArticleId),
    [selectedArticleId]
  );

  if (loading) {
    return <ArticleContentPlaceholder />;
  } else {
    if (data) {
      const article = data as ArticleDetail;
      return (
        <>
          <div className="container my-5">
            <div className="mb-4">
              <h1 className="fw-bold">{article?.title}</h1>
              <div className="d-flex flex-wrap text-muted small mt-2 gap-3">
                <span>
                  📅{" "}
                  {moment(article?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
                <span>⏱️ {article?.readTimeInMinute} dakika okuma süresi</span>
                <span>💬 {article?.totalCommentCount} yorum</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="me-2">Paylaş:</span>
              <a href="#" className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary me-2">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="btn btn-sm btn-outline-danger">
                <i className="bi bi-reddit"></i> Reddit
              </a>
            </div>

            <div className="article-content mb-5">{article?.htmlContent}</div>
            <hr />
            <CommentsSection article={article} />
          </div>
        </>
      );
    }
  }
  return null;
}
