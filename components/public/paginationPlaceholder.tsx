import clsx from "clsx";

export default function PaginationPlaceholder() {

    return (
        <div className="row">
            <div className="col-12 d-flex flex-row justify-content-end">
                <nav className="mb-1" aria-label="Pagination">
                    <ul className="pagination pagination-sm">
                        <li className="page-item">
                            <a className="page-link user-select-none" href="#" aria-label="aaa">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="text-center page-item active" style={{width: "40px"}}>
                            <a role="button" className="page-link user-select-none">1</a>
                        </li>
                        <li className="text-center page-item" style={{width: "40px"}}>
                            <a role="button" className="page-link user-select-none">2</a>
                        </li>
                        <li className="text-center page-item" style={{width: "40px"}}>
                            <a role="button" className="page-link user-select-none">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link user-select-none" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
