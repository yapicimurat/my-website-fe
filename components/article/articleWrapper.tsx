import useFetch from "../../hook/useFetch";
import {getAll} from "../../service/articleService";
import ArticleCard from "./articleCard";
import {Article} from "../../service/model/article";
import ArticleCardPlaceholder from "./articleCardPlaceholder";
import Pageable from "../../service/model/pageable";
import Pagination from "../public/pagination";
import {useArticleStore} from "../../store";
import {useEffect} from "react";
import PaginationPlaceholder from "../public/paginationPlaceholder";

export default function ArticleWrapper() {
    const {currentPage, nextPage, previousPage, setPage, setArticles} = useArticleStore((state) => state);
    const [loading, data] = useFetch<Pageable<Article>>(getAll, currentPage);

    useEffect(() => {
        if(data) {
            setArticles(data as Pageable<Article>);
        }
    }, [data]);


    const renderArticleCardPlaceholder = () => {
        let placeholders = [];

        for(let i = 1; i <= 4; i++) {
            placeholders.push((
                <ArticleCardPlaceholder key={i}/>
            ));
        }

        return (loading) ? (
        <>
            {placeholders}
        </>
        ) :
        null
    };

    const renderArticles = () => {
        return (
            <>
                <Pagination pageable={data as Pageable<Article>} current={currentPage} setPage={setPage} nextPage={nextPage} previousPage={previousPage} />
                <div className="container overflow-hidden">
                    {(!loading) ? (
                        <div className="row">
                            {(data as Pageable<Article>).elements.map((article, index) => {
                                return <ArticleCard key={index} article={article}/>
                            })}
                        </div>
                    ): (
                        renderArticleCardPlaceholder()
                    )}
                </div>
            </>
        )
    };

    const listArticles = () => {
        return (
            <>
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
