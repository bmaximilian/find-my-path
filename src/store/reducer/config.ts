import { AnyAction } from 'redux';
import { SET_SELECTED_ALGORITHM } from '../actions/configActions';
import { initialState } from '../state/initialState';

type ConfigState = typeof initialState.config;

export function config(state = initialState.config, action: AnyAction): ConfigState {
    switch (action.type) {
        case SET_SELECTED_ALGORITHM:
            return {
                ...state,
                selectedAlgorithmIndex: state.algorithms.findIndex(algorithm => algorithm.id === action.algorithm.id),
            };
        default:
            return state;
    }
}
