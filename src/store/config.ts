import {bindActionCreators, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducer';
import * as actionsCreators from './actionCreators';

export const state = createStore(reducer, composeWithDevTools());

export const actions = bindActionCreators(actionsCreators, state.dispatch as any);
