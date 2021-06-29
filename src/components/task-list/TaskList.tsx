import React from 'react';
import CardTask from '../card-task';
import Button from '../button';
import {Task} from '../../types';
import {TASK_ON_PAGE} from '../../consts';
import {useSelector} from 'react-redux';
import {StateModel} from '../../store/types';
import {actions} from '../../store/config';

type OwnProps = {
    tasks: Task[]
};

const TaskList: React.FC<OwnProps> = () => {

    const searchValue = useSelector((state: StateModel) => state.searchValue);
    const pageNumber = useSelector((state: StateModel) => state.pageNumber);
    const tasks = useSelector((state: StateModel) => state.tasks);

    const getTaskOnPage = () => {
        const startIndex = pageNumber * TASK_ON_PAGE;
        const endIndex = startIndex + TASK_ON_PAGE;
        return tasks.slice(startIndex, endIndex);
    }


    const showTasks = getTaskOnPage();

    const handleResetPage = () => {
        actions.changePageNumber(0);
    }

    const handleChangeSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
        actions.changeSearchValue(event.currentTarget.value)
        handleResetPage();
    };

    return (
        <div className="card-body" id="past">
            <p className="h4">Список задач</p>
            <div className="d-flex justify-content-between mb-2 col-auto">
                <input
                    type="text"
                    className="form-control mr-1"
                    placeholder="Поиск..."
                    value={searchValue}
                    onChange={handleChangeSearch}
                />
                <Button
                    id="btnTask"
                    type="submit"
                    styleType="danger"
                    buttonName="Очистить список"
                />
            </div>
            <div className="list-group">
                {showTasks.map((task: Task, taskId: string) => (
                    <CardTask
                        key={taskId}
                        task={task}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
