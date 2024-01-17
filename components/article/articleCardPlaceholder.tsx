
export default function ArticleCardPlaceholder() {
    
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
            <div className="card bg-light border border-secondary" aria-hidden="true">
                <img src="/no-image.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-sm btn-primary disabled placeholder col-3" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    );
}
