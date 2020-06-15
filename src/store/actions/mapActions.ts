import { Action } from 'redux';
import { Cell } from '../state/initialState';

export const SET_CELL_AS_OBSTACLE = 'GRID::SET_CELL_AS_OBSTACLE';

export function setCellAsObstacle(cell: Cell): Action<typeof SET_CELL_AS_OBSTACLE> & { cell: Cell } {
    return {
        type: SET_CELL_AS_OBSTACLE,
        cell,
    };
}
