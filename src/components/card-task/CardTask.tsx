import React from 'react';
import moment from 'moment';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import {faStar, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import './CardTask.scss';
import {Task} from '../../types';
import {useSelector} from 'react-redux';
import {StateModel} from '../../store/types';
import {actions} from '../../store/config';


type OwnProps = {
    task: Task;
};

const CardTask: React.FC<OwnProps> = ({task}) => {

    const form = useSelector((state: StateModel) => state.form);
    const handleRemove = () => {
        const onRemoveTask = actions.removeTask;
        onRemoveTask(task.id);
    }

    const handleEdit = () => {
        const onChangeFormStatus = actions.editTask;       
        onChangeFormStatus(task);
    }

//    const changeStatus = () => {
// const onToggleTaskImportant = useSelector((state: StateModel) => state.form.values.important = !state.form.values.important)
//         onToggleTaskImportant(task);
//     }

   const makeCardClass = () => {

        return [
            'list-group-item list-group-item-action',
            form.editTaskId === task.id ? 'bg-primary text-white' : '',
        ].join(' ');
    }

        const starStatus = task.important ? fasStar : faStar;

        return (
            <div className={makeCardClass()}>
                <div className="card-body d-flex p-0 justify-content-between align-middle">
                    <p className="m-0 font-weight-bold">{task.title}</p>
                    <div className="controls d-flex w-15 mb-0">
                        <p className="mb-0 btn m-0 p-0">
                            <FontAwesomeIcon
                                // onClick={changeStatus}
                                icon={starStatus}
                                className="fa-important"
                                fixedWidth
                            />
                            <FontAwesomeIcon
                                onClick={handleEdit}
                                className="fa-edit"
                                icon={faPencilAlt}
                                fixedWidth
                            />
                            <FontAwesomeIcon
                                onClick={handleRemove}
                                className="fa-delete"
                                icon={faTrashAlt}
                                fixedWidth
                            />
                        </p>
                    </div>
                </div>
                <div>
                    <p className="m-0 pl-0">{task.description}</p>
                </div>
                <div>
                    <p className="m-0 pl-0">{moment(task.date, 'DD-MM-YYYY').format('dddd, DD MMMM YYYY')}</p>
                </div>
            </div>
        );
    }

export default CardTask;
