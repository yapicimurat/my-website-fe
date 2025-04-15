export default function ArticleCardPlaceholder() {
  return (
    <div className="card mb-3 shadow-sm" aria-hidden="true">
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="placeholder col-1"></small>
          <span className="btn btn-sm btn-outline-primary disabled placeholder col-1"></span>
        </div>
        <div className="d-flex flex-wrap gap-1 placeholder-glow">
          <span className="placeholder col-1 rounded-pill"></span>
          <span className="placeholder col-1 rounded-pill"></span>
          <span className="placeholder col-1 rounded-pill"></span>
        </div>
      </div>
    </div>
  );
}
