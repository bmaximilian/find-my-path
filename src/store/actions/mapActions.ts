import { Action } from 'redux';
import { Cell } from '../state/initialState';

export const SET_CELL_AS_OBSTACLE = 'GRID::SET_CELL_AS_OBSTACLE';
export const REPLACE_GRID = 'GRID::REPLACE_GRID';
export const SET_CELL_AS_SHORTEST_PATH = 'GRID::SET_CELL_AS_SHORTEST_PATH';

export function setCellAsObstacle(cell: Cell): Action<typeof SET_CELL_AS_OBSTACLE> & { cell: Cell } {
    return {
        type: SET_CELL_AS_OBSTACLE,
        cell,
    };
}

export function replaceGrid(grid: Cell[][]): Action<typeof REPLACE_GRID> & { grid: Cell[][] } {
    return {
        type: REPLACE_GRID,
        grid,
    };
}

export function setCellAsShortestPath(cell: Cell): Action<typeof SET_CELL_AS_SHORTEST_PATH> & { cell: Cell } {
    return {
        type: SET_CELL_AS_SHORTEST_PATH,
        cell,
    };
}
