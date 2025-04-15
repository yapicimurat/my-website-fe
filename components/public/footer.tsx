export default function Footer() {
    return (
        <div className="footer bg-body-tertiary py-4 mt-5 border-top">
  <div className="container">
    <div className="row align-items-center">
      {/* Açıklama */}
      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
        <p className="mb-1">
          © 2025 Murat YAPICI – Yazılım üzerine makaleler paylaşıyorum.
        </p>
        <small className="text-muted">Hepsi kişisel görüşlerimi yansıtır.</small>
      </div>

      {/* Sosyal Medya Linkleri */}
      <div className="col-md-6 text-center text-md-end">
        <a 
          href="https://www.linkedin.com/in/murat-yapici" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-decoration-none me-3"
        >
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
        <a 
          href="https://github.com/muratyapici" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-decoration-none me-3"
        >
          <i className="bi bi-github"></i> GitHub
        </a>
        <a 
          href="https://www.youtube.com/@muratyazilim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-decoration-none"
        >
          <i className="bi bi-youtube"></i> YouTube
        </a>
      </div>
    </div>
  </div>
</div>

    );
}
