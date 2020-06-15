import { AnyAction } from 'redux';
import { set } from 'object-path-immutable';
import { initialState } from '../state/initialState';
import { SET_CELL_AS_OBSTACLE } from '../actions/mapActions';

type MapState = typeof initialState.map;

export function map(state = initialState.map, action: AnyAction): MapState {
    switch (action.type) {
        case SET_CELL_AS_OBSTACLE:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.type`, 'obstacle');
        default:
            return state;
    };
}
