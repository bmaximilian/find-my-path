import { AnyAction } from 'redux';
import { set } from 'object-path-immutable';
import { CellTypes } from '../../models/Cell';
import { initialState } from '../state/initialState';
import {
    SET_CELL_AS_OBSTACLE,
    SET_CELL_AS_SHORTEST_PATH,
    REPLACE_GRID,
    SET_DIRTY,
    SET_ANIMATING,
} from '../actions/mapActions';

type MapState = typeof initialState.map;

export function map(state = initialState.map, action: AnyAction): MapState {
    switch (action.type) {
        case SET_CELL_AS_OBSTACLE:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.type`, CellTypes.OBSTACLE);
        case REPLACE_GRID:
            return {
                ...state,
                grid: action.grid,
            };
        case SET_DIRTY:
            return {
                ...state,
                isDirty: action.isDirty,
            };
        case SET_ANIMATING:
            return {
                ...state,
                isAnimating: action.isAnimating,
            };
        case SET_CELL_AS_SHORTEST_PATH:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.isShortestPath`, true);
        default:
            return state;
    }
}
