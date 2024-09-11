import {Article} from "../../service/model/article/article";
import Pageable from "../../service/model/pageable";
import clsx from "clsx";

type PaginationProps = {
    pageable: Pageable<Article>,
    current: number,
    setPage: (page: number) => void
    previousPage: () => void,
    nextPage: () => void
}

export default function Pagination(props: PaginationProps) {
    if(!props.pageable) {
        return (
            <div className="row">
                <div className="col-12 d-flex flex-row justify-content-end">
                    <nav className="mb-1" aria-label="Page navigation example">
                        <p className="text-end" aria-hidden="true">
                            <span className="placeholder col-3 placeholder-lg rounded-3"></span>
                        </p>
                    </nav>
                </div>
            </div>
        )
    }
    const calcAmountOfPage = Math.ceil(props.pageable.totalElementsPerPage * props.pageable.totalPages / props.pageable.totalElementsPerPage);
    const amountOfPage = (calcAmountOfPage >= 1) ? calcAmountOfPage : 1;

    const goPage = (pageNumber: number) => {
        props.setPage(pageNumber);
    };

    const paginationItem = (pageNumber: number) => {
        return (
            <li key={pageNumber} style={{width: "40px"}}
                className={clsx({"text-center": true, "page-item": true, "active": (pageNumber === props.current)})}>
                <a role="button" className="page-link user-select-none"
                   onClick={() => goPage(pageNumber)}>{pageNumber}</a>
            </li>
        );
    }

    const next = () => {
        props.nextPage();
    };
    const previous = () => {
        props.previousPage();
    };

    const drawPageButton = () => {
        const generatedPageItems = [];
        if(amountOfPage <= 10){
            for(let i = 1; i <= amountOfPage; i++){
                generatedPageItems.push(paginationItem(i));
            }
        }else{
            const isDoubleNode = (props.current - 3 > 2 && props.current + 4 < amountOfPage - 1);
            const isLeftNode = (props.current - 3 > 2);
            const isRightNode = (props.current + 4 < amountOfPage - 1);
            const node = (
                <li className="page-item">
                    <p className="page-link text-dark">...</p>
                </li>
            );

            if(isDoubleNode){
                generatedPageItems.push(
                    <>
                        {paginationItem(1)}
                        {node}
                    </>
                );

                for(let i = props.current - 3; i <= (props.current - 3) + 7; i++){
                    generatedPageItems.push(paginationItem(i));
                }

                generatedPageItems.push(
                    <>
                        {node}
                        {paginationItem(amountOfPage)}
                    </>
                );
            }
            else if(isLeftNode){
                generatedPageItems.push(
                    <>
                        {paginationItem(1)}
                        {node}
                    </>
                );

                for(let i = amountOfPage - 8; i <= amountOfPage; i++){
                    generatedPageItems.push(paginationItem(i))
                }

            }
            else if(isRightNode){
                for(let i = 1; i <= 1 + 8; i++){
                    generatedPageItems.push(paginationItem(i))
                }

                generatedPageItems.push(
                    <>
                        {node}
                        {paginationItem(amountOfPage)}
                    </>
                );
            }
        }
        return generatedPageItems;
    };

    return (
        <div className="row">
            <div className="col-12 d-flex flex-row justify-content-end">
                <nav className="mb-1" aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                        <li className="page-item">
                            <a role="button" className="page-link user-select-none" onClick={previous}>Önceki</a>
                        </li>
                        {drawPageButton()}
                        <li className="page-item">
                            <a role="button" className="page-link user-select-none" onClick={next}>Sonraki</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
