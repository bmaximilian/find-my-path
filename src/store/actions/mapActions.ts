import { Action } from 'redux';
import { Cell } from '../state/initialState';

export const SET_CELL_AS_OBSTACLE = 'GRID::SET_CELL_AS_OBSTACLE';
export const SET_CELL_AS_VISITED = 'GRID::SET_CELL_AS_VISITED';
export const SET_CELL_AS_SHORTEST_PATH = 'GRID::SET_CELL_AS_SHORTEST_PATH';

export function setCellAsObstacle(cell: Cell): Action<typeof SET_CELL_AS_OBSTACLE> & { cell: Cell } {
    return {
        type: SET_CELL_AS_OBSTACLE,
        cell,
    };
}

export function setCellAsVisited(cell: Cell): Action<typeof SET_CELL_AS_VISITED> & { cell: Cell } {
    return {
        type: SET_CELL_AS_VISITED,
        cell,
    };
}

export function setCellAsShortestPath(cell: Cell): Action<typeof SET_CELL_AS_SHORTEST_PATH> & { cell: Cell } {
    return {
        type: SET_CELL_AS_SHORTEST_PATH,
        cell,
    };
}
