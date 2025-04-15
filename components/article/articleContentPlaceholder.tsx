export function ArticleContentPlaceholder() {
  return (
    <div className="container my-5" aria-hidden="true">
      <div className="mb-4">
        <h1 className="placeholder-glow fw-bold">
          <span className="placeholder col-8"></span>
        </h1>
        <div className="d-flex flex-wrap text-muted small mt-2 gap-3 placeholder-glow">
          <span className="placeholder col-2"></span>
          <span className="placeholder col-3"></span>
          <span className="placeholder col-2"></span>
        </div>
      </div>

      <div className="mb-4 d-flex gap-2">
        <span className="placeholder col-1"></span>
        <span className="btn btn-sm btn-outline-primary disabled placeholder col-1"></span>
        <span className="btn btn-sm btn-outline-secondary disabled placeholder col-1"></span>
        <span className="btn btn-sm btn-outline-danger disabled placeholder col-1"></span>
      </div>

      <div className="article-content mb-5 placeholder-glow">
        <p className="placeholder col-12 mb-2"></p>
        <p className="placeholder col-10 mb-2"></p>
        <p className="placeholder col-11 mb-2"></p>
        <p className="placeholder col-9 mb-2"></p>
        <p className="placeholder col-7"></p>
      </div>

      <hr />

      <div className="comments-section">
        <h4 className="mb-3 placeholder-glow">
          <span className="placeholder col-4"></span>
        </h4>

        <div className="mb-3 border rounded p-3 placeholder-glow">
          <span className="placeholder col-3 mb-1 d-block"></span>
          <span className="placeholder col-2 mb-2 d-block"></span>
          <p className="mb-0">
            <span className="placeholder col-8 mb-1 d-block"></span>
            <span className="placeholder col-6 d-block"></span>
          </p>
        </div>

        <div className="mt-4 placeholder-glow">
          <label className="form-label placeholder col-3"></label>
          <div
            className="placeholder col-12 mb-3"
            style={{height: "100px", borderRadius: "0.375rem", backgroundColor: "#e9ecef"}}
          ></div>
          <button className="btn btn-primary disabled placeholder col-3"></button>
        </div>
      </div>
    </div>
  );
}
