import {useEffect, useState} from "react";
import {Article} from "../service/model/article";
import {getAll} from "../service/articleService";


export default function() {

    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {


    }, []);

    const handleList = () => {
        (async () => {
            const response = await getAll();

            setArticles(response);
        })();
    };

    return (
        <>
            <button onClick={handleList}>List</button>
            <hr/>
            <li>
                {(articles.length > 0) ? (
                    articles.map((article:Article, index) => {
                        return article.description;
                    })
                ): null}
            </li>
        </>

    );
}
