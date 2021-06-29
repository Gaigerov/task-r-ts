import {FormStatus, PageName} from '../enums';
import {FormModel, Task} from '../types';
import * as ACTION from './actions';
import {
    ChangeSearchValueAction,
    ChangePageNameAction,
    ChangePageNumberAction,
    FormAction,
    AddTaskAction,
    EditTaskAction,
    RemoveTaskAction,
    EditFormAction,
    ResetFormAction,
} from './types';

export const changePageName = (pageName: PageName): ChangePageNameAction => ({
    type: ACTION.CHANGE_PAGE_NAME,
    payload: pageName,
});

export const changePageNumber = (pageNumber: number): ChangePageNumberAction => ({
    type: ACTION.CHANGE_PAGE_NUMBER,
    payload: pageNumber,
});

export const changeSearchValue = (searchValue: string): ChangeSearchValueAction => ({
    type: ACTION.CHANGE_SEARCH_VALUE,
    payload: searchValue,
});

export const formModel = (form: FormModel): FormAction => ({
    type: ACTION.FORM_MODEL,
    payload: form,
});

export const addTask = (task: Task): AddTaskAction => ({
    type: ACTION.ADD_TASK,
    payload: task,
});

export const editTask = (taskToEdit: Task): EditTaskAction => ({
    type: ACTION.EDIT_TASK,
    payload: taskToEdit,
});

export const removeTask = (removeTaskId: string): RemoveTaskAction => ({
    type: ACTION.REMOVE_TASK,
    payload: removeTaskId,
});

export const editForm = (formStatus: FormStatus): EditFormAction => ({
    type: ACTION.EDIT_FORM,
    payload: formStatus,
});

export const resetForm = (form: FormModel): ResetFormAction => ({
    type: ACTION.RESET_FORM,
    payload: form,
});

