import { AnyAction } from 'redux';
import { set } from 'object-path-immutable';
import { initialState } from '../state/initialState';
import { SET_CELL_AS_OBSTACLE, SET_CELL_AS_SHORTEST_PATH, SET_CELL_AS_VISITED } from '../actions/mapActions';
import { CellTypes } from '../../algorithms/dijkstra';

type MapState = typeof initialState.map;

export function map(state = initialState.map, action: AnyAction): MapState {
    switch (action.type) {
        case SET_CELL_AS_OBSTACLE:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.type`, CellTypes.OBSTACLE);
        case SET_CELL_AS_VISITED:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.isVisited`, true);
        case SET_CELL_AS_SHORTEST_PATH:
            return set(state, `grid.${action.cell.row}.${action.cell.col}.isShortestPath`, true);
        default:
            return state;
    }
}
