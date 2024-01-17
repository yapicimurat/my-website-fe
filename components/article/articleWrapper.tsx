import useFetch from "../../hook/useFetch";
import {getAll} from "../../service/articleService";
import ArticleCard from "./articleCard";
import {Article} from "../../service/model/article";
import ArticleCardPlaceholder from "./articleCardPlaceholder";
import Pageable from "../../service/model/pageable";
import Pagination from "../public/pagination";

export default function ArticleWrapper() {
    const [loading, data] = useFetch<Pageable<Article>>(getAll);

    const renderArticleCardPlaceholder = () => {
        let placeholders = [];

        for(let i = 1; i <= 8; i++) {
            placeholders.push((
                <ArticleCardPlaceholder key={i}/>
            ));
        }

        return (loading) ? (
            placeholders
        ) : null
    };

    const renderArticles = () => {
        if(!loading) {
            const articles: Array<Article> = (data as Pageable<Article>).elements;
            return (
                <>
                    <Pagination pageable={data as Pageable<Article>}/>
                    <div className="container overflow-hidden">
                        <div className="row">
                            {articles.map((article, index) => {
                                return <ArticleCard key={index} article={article}/>
                            })}
                        </div>
                    </div>
                </>
            )
        }

        return null;
    };

    const listArticles = () => {
        return (
            <>
                {renderArticleCardPlaceholder()}
                {renderArticles()}
            </>
        )
    };

    return (
        <div className="row mb-3">
            {listArticles()}
        </div>
    );
}
