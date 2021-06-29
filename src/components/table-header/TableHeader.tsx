import React from 'react';
import {useSelector} from 'react-redux';
import {PageName} from '../../enums';
import {actions} from '../../store/config';
import {StateModel} from '../../store/types';


type OwnProps = {}


const TableHeader: React.FC<OwnProps> = () => {
    const pageName = useSelector((state: StateModel) => state.pageName);

    const handleEditPage = (pageName: PageName) => {
        actions.changePageName(pageName)
    };

    const handleMainPage = (pageName: PageName) => {
        actions.changePageName(pageName)
    };

    return (
        <div>
            <ul className={'nav nav-tabs pl-5 border-bottom-0'}>
                <li className={'nav-item'}>
                    <p className={pageName === PageName.Main ? 'nav-link btn active' : 'nav-link btn'} onClick={() => handleMainPage(PageName.Main)}>Редактирование задач</p>
                </li>
                <li className={'nav-item'}>
                    <p className={pageName === PageName.Edit ? 'nav-link btn active' : 'nav-link btn'} onClick={() => handleEditPage(PageName.Edit)}>Работа с задачами</p>
                </li>
            </ul>
        </div>
    );
}

export default TableHeader;

