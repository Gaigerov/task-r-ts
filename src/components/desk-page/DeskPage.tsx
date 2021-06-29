import React from 'react';
// import {useSelector} from 'react-redux';
// import {TaskStatus} from '../../enums';
// import {StateModel} from '../../store/types';
import {Task} from '../../types';
// import DeskPageCard from './DeskPageCard';

type OwnProps = {
    tasks: Task[]
};

const DeskPage: React.FC<OwnProps> = ({tasks}) => {


    //     tasks() {
    //         return tasks.reduce<{pendingTasks: Task[], inWorkTasks: Task[], doneTasks: Task[]}>((memo, task) => {
    //             switch (task.status) {
    //                 case TaskStatus.Pending: {
    //                     memo.pendingTasks.push(task);
    //                     break;
    //                 }
    //                 case TaskStatus.InWork: {
    //                     memo.inWorkTasks.push(task);
    //                     break;
    //                 }
    //                 case TaskStatus.Done: {
    //                     memo.doneTasks.push(task);
    //                     break;
    //                 }
    //                 default: {
    //                     memo.pendingTasks.push(task);
    //                     break;
    //                 }
    //             }
    //             return memo;
    //         }, {pendingTasks: [], inWorkTasks: [], doneTasks: []});
    //     }
    // }
    //           const {pendingTasks, inWorkTasks, doneTasks} = sortedTasks();

    return (
        <div className="card ml-2 mr-2">
            <div className="card-body" id="past">
                <p className="h4">Работа с задачами</p>
                <span className="d-flex ml-2 mr-2 row">
                    <div className="card col-12 col-md-12 col-lg-4 border-warning bg-warning-50 text-dark">
                        <div className="card-body">
                            <h4>В ожидании</h4>
                            <p>эти задачи ждут исполнителя</p>
                            <div className="list-group">
                                {/* {pendingTasks.map((task, taskId) => (
                                        <DeskPageCard
                                            key={taskId}
                                            task={task}
                                        />
                                    ))} */}
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-12 col-lg-4 border-primary bg-gradient text-dark">
                        <div className="card-body">
                            <h4>В работе</h4>
                            <p>эти задачи находятся у исполнителя в работе</p>
                            {/* {inWorkTasks.map(t => t.title).join(',')} */}
                        </div>
                    </div>

                    <div className="card col-12 col-md-12 col-lg-4 border-success text-dark">
                        <div className="card-body">
                            <h4>Готовые</h4>
                            <p>эти задачи готовы и переданы заказчику</p>
                            {/* {doneTasks.map(t => t.title).join(',')} */}
                        </div>
                    </div>
                </span>

            </div>
        </div>
    );
}

export default DeskPage;
