import {Article} from "../../service/model/article";
import Pageable from "../../service/model/pageable";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {clamp} from "../../util/util";

type PaginationProps = {
    pageable: Pageable<Article>
}

export default function Pagination(props: PaginationProps) {
    const [current, setCurrent] = useState(1);

    const calcAmountOfPage = Math.ceil(props.pageable.totalElementsPerPage * props.pageable.totalPages / props.pageable.totalElementsPerPage);
    const amountOfPage = (calcAmountOfPage >= 1) ? calcAmountOfPage : 1;

    const goPage = (pageNumber: number) => {
        setCurrent(pageNumber);
    };

    const paginationItem = (pageNumber: number) => {
        return (
            <li key={pageNumber} style={{width: "40px"}} className={clsx({"text-center": true, "page-item": true, "active": (pageNumber === current)})}>
                <a role="button" className="page-link user-select-none" onClick={() => goPage(pageNumber)}>{pageNumber}</a>
            </li>
        );
    }

    const next = () => {
        const newPage = clamp(current + 1, 1, amountOfPage);
        setCurrent(newPage);
    };
    const previous = () => {
        const newPage = clamp(current - 1, 1, amountOfPage)
        setCurrent(newPage);
    };

    const drawPageButton = () => {
        const generatedPageItems = [];
        if(amountOfPage <= 10){
            debugger;
            for(let i = 1; i <= amountOfPage; i++){
                generatedPageItems.push(paginationItem(i));
            }
        }else{
            debugger;
            const isDoubleNode = (current - 3 > 2 && current + 4 < amountOfPage - 1);
            const isLeftNode = (current - 3 > 2);
            const isRightNode = (current + 4 < amountOfPage - 1);
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

                for(let i = current - 3; i <= (current - 3) + 7; i++){
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
                        <li className="page-item"><a role="button" className="page-link user-select-none"
                                                     onClick={previous}>&laquo;</a></li>
                        {drawPageButton()}
                        <li className="page-item"><a role="button" className="page-link user-select-none"
                                                     onClick={next}>&raquo;</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
