import {useRouter} from "next/router";
import Header from "../../components/public/header";
import Content from "../../components/public/content";
import Footer from "../../components/public/footer";
import ArticleContent from "../../components/article/articleContent";


export default function ArticleContentPage() {
    const router = useRouter();

    return (
        <>
            <Header/>
            <Content content={<ArticleContent articleId={String(router.query.id)}/>}/>
            <Footer/>
        </>
    );
}