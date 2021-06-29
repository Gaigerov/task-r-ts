import React from 'react';
import {useSelector} from 'react-redux';
import {actions} from '../../store/config';

type OwnProps = {
    onPageCount: number;
};

type ConnectedProps = {
    pageNumber: number;
};

const Pagination: React.FC<OwnProps> = ({onPageCount}) => {

    const pageNumber = useSelector((store: ConnectedProps) => store.pageNumber);

    // const handleClickLeft = (pageNumber: number) => {
    //     if (pageNumber > 0) {
    //         actions.changePageNumber(pageNumber - 1);
    //     } 
    // }

    // const handleClickRight = (pageNumber: number, onPageCount: number) => {
    //     if (pageNumber < onPageCount - 1) {
    //         actions.changePageNumber(pageNumber + 1);
    //     }
    // }

    return (
        <div className="pagination justify-content-center btn">
            <li className={pageNumber === 0 ? 'page-item disabled' : 'page-item'}>
                {/* <span onClick={handleClickLeft} className="page-link">left</span> */}
            </li>
            <li className="page-item">
                <span className="page-link">{pageNumber + 1}</span>
            </li>
            <li className={pageNumber === onPageCount - 1 ? 'page-item disabled' : 'page-item'}>
                {/* <span onClick={handleClickRight} className="page-link">right</span> */}
            </li>

        </div>
    );
}

export default Pagination;
