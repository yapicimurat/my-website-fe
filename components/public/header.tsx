import Link from "next/link";

export default function() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-1">
            <div className="container">
                <Link href="/" className="navbar-brand d-flex flex-column align-items-center">
                    <span className="h4 mb-0">Murat YAPICI</span>
                    <small style={{fontSize: ".7rem"}}>Software Developer</small>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Anasayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Hakkımda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gönderiler</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Gönderi ara" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Ara</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
