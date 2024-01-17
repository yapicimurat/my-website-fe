import {Article} from "../../service/model/article";
import Pageable from "../../service/model/pageable";
import {useEffect, useState} from "react";
import clsx from "clsx";

type PaginationProps = {
    pageable: Pageable<Article>
}

const MAX_RIGHT_NODE_NUMBER = 8;
const AMOUNT_OF_SINGLE_NODE_BUTTONS = 8;
const THREE_POINTS = <li className="page-item"><a className="page-link" href="#">...</a></li>;


export default function Pagination(props: PaginationProps) {
    const [current, setCurrent] = useState(1);

    const drawFullNodeButtons = (endNumber: number) => {
        return Array(endNumber).fill(0).map((x, index) => {
            return (
                <li className={clsx({"page-item": true, "active": current === index + 1})}><a className="page-link" href="#">{index + 1}</a></li>
            )
        });
    }

    const drawPageButton = () => {
        //
        if(props.pageable.totalPages <= 10) {
            return drawFullNodeButtons(props.pageable.totalPages);
        }else {
            //decide pagination bar will be single left, single right or double node

            //left node
            //SINGLE NODE
            //if(props.pageable.totalPages -  (AMOUNT_OF_SINGLE_NODE_BUTTONS + 1))


            //right node


            //double node
        }




    };

    useEffect(() => {
        const size = props.pageable.elements.length;

    }, [props.pageable]);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={clsx({'page-item': true, 'disabled': !props.pageable.hasPrevious})}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    drawPageButton()
                }

                <li className={clsx({'page-item': true, 'disabled': !props.pageable.hasNext})}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
