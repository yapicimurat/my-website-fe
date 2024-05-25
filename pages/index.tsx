import Header from "../components/public/header";
import Footer from "../components/public/footer";
import Content from "../components/public/content";
import ArticleWrapper from "../components/article/articleWrapper";

export default function Home() {
  return (
      <>
          <Header/>
          <Content content={<ArticleWrapper/>}/>
          <Footer/>
      </>
  )
}
