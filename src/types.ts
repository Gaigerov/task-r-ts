import {FormStatus, TaskStatus} from './enums';

export type Task = {
    title: string;
    description: string;
    date: string;
    important: boolean;
    status: TaskStatus;
    id: string;
};

export type FormModel = {
    status: FormStatus;
    editTaskId: string | undefined;
    values: Task;
};
