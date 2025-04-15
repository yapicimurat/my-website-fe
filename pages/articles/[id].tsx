import {useRouter} from "next/router";
import Header from "../../components/public/header";
import Content from "../../components/public/content";
import Footer from "../../components/public/footer";
import ArticleContent from "../../components/article/articleContent";
import {useGeneralStore} from "../../store";
import {useEffect} from "react";


export default function ArticleContentPage() {
    const router = useRouter();
    const {setSelectedArticleId} = useGeneralStore(state => state);

    useEffect(() => {
        if(router.query?.id) {
            setSelectedArticleId(String(router.query.id));
        }
    }, [router.query.id]);


    return (
        <>
            <Header/>
            <Content content={<ArticleContent/>}/>
            <Footer/>
        </>
    );
}
