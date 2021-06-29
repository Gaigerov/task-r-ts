import {FormStatus, PageName} from '../enums';
import {FormModel, Task} from '../types';
import * as ACTION from './actions';

export type StateModel = {
    searchValue: string;
    pageName: PageName;
    pageNumber: number;
    form: FormModel;
    tasks: typeof localStorage | typeof sessionStorage | [];

};

export type ActionModel<T = string, P = never> = {
    type: T;
    payload: P;
};

export type ChangeSearchValueAction = ActionModel<typeof ACTION.CHANGE_SEARCH_VALUE, string>;
export type ChangePageNameAction = ActionModel<typeof ACTION.CHANGE_PAGE_NAME, PageName>;
export type ChangePageNumberAction = ActionModel<typeof ACTION.CHANGE_PAGE_NUMBER, number>;
export type FormAction = ActionModel<typeof ACTION.FORM_MODEL, FormModel>;
export type AddTaskAction = ActionModel<typeof ACTION.ADD_TASK, Task>;
export type EditTaskAction = ActionModel<typeof ACTION.EDIT_TASK, Task>;
export type RemoveTaskAction = ActionModel<typeof ACTION.REMOVE_TASK, string>;
export type EditFormAction = ActionModel<typeof ACTION.EDIT_FORM, FormStatus>;
export type ResetFormAction = ActionModel<typeof ACTION.RESET_FORM, FormModel>;


export type AllActions = (
    | ChangeSearchValueAction
    | ChangePageNameAction
    | ChangePageNumberAction
    | FormAction
    | AddTaskAction
    | EditTaskAction
    | RemoveTaskAction
    | EditFormAction
    | ResetFormAction
);
