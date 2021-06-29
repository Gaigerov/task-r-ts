import {AllActions, StateModel} from './types';
import * as ACTION from './actions';
import {FormStatus, PageName, StoreKey, TaskStatus} from '../enums';
import {getStorageValue} from '../utils';

const INIT_STATE: StateModel = {
    tasks: getStorageValue(localStorage, StoreKey.Tasks),
    searchValue: '',
    pageName: PageName.Main,
    pageNumber: 0,
    form: {
        status: FormStatus.Create,
        editTaskId: undefined,
        values: {
            title: '',
            description: '',
            date: '',
            important: false,
            status: TaskStatus.Pending,
            id: '',
        },
    },
};

export const reducer = (state = INIT_STATE, action: AllActions): StateModel => {
    switch (action.type) {

        case ACTION.CHANGE_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload,
            };
        }

        case ACTION.CHANGE_PAGE_NAME: {
            return {
                ...state,
                pageName: action.payload,
            };
        }

        case ACTION.CHANGE_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload,
            }
        }

        case ACTION.FORM_MODEL: {
            return {
                ...state,
                form: state.form,
            }
        }

        case ACTION.EDIT_FORM: {
            return {
                ...state,
                form: state.form,
            }
        }

        case ACTION.RESET_FORM: {
            return {
                ...state,
                form: action.payload,
            }
        }

        case ACTION.ADD_TASK: {
            return {
                ...state,
                tasks: state.tasks.concat(action.payload),
            }
        }

        default: {
            return state;
        }
    }
}