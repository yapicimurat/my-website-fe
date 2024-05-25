import ArticleWrapper from "../article/articleWrapper";

type ContentProp = {
    content: JSX.Element
}

export default function Content(props: ContentProp) {
    return (
        <div className="default-page-content container pt-3">
            {props.content}
        </div>
    );
}
