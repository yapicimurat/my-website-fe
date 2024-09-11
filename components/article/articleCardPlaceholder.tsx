
export default function ArticleCardPlaceholder() {
    return (
        <a href="#" className="list-group-item list-group-item-action" style={{height: "75px"}}>
            <div className="row d-flex justify-content-between">
                <span className="mb-1 placeholder placeholder-xs col-2"></span>
            </div>
            <div className="row">
                <p className="mb-1 col-6 placeholder placeholder-sm"></p>

            </div>
            <div className="row">
                <small className="text-body-secondary col-2 placeholder placeholder-sm"></small>
            </div>
        </a>
    )
}
