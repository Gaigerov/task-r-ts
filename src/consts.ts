import {TaskStatus} from './enums';
import {Task} from './types';

export const TASK_ON_PAGE = 5;

export const EMPTY_TASK: Task = {
    title: '',
    description: '',
    date: '',
    important: false,
    status: TaskStatus.Pending,
    id: '',
};
