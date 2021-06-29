import React from 'react';
import moment from 'moment';

import {Task} from '../../types';

type Props = {
    task: Task;
};

const DeskPageCard: React.FC<Props> = ({task}) => {

        return (
            <div className="list-group-item list-group-item-action">
                <div className="card-body d-flex p-0 justify-content-between align-middle">
                    <p className="m-0 font-weight-bold">{task.title}</p>
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

export default DeskPageCard;
