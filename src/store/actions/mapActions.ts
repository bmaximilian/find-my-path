import { Action } from 'redux';
import { Cell } from '../../models/Cell';

export const SET_CELL_AS_OBSTACLE = 'GRID::SET_CELL_AS_OBSTACLE';
export const REPLACE_GRID = 'GRID::REPLACE_GRID';
export const SET_DIRTY = 'GRID::SET_DIRTY';
export const SET_ANIMATING = 'GRID::SET_ANIMATING';
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

export function setGridDirty(isDirty: boolean): Action<typeof SET_DIRTY> & { isDirty: boolean } {
    return {
        type: SET_DIRTY,
        isDirty,
    };
}

export function setGridAnimating(isAnimating: boolean): Action<typeof SET_ANIMATING> & { isAnimating: boolean } {
    return {
        type: SET_ANIMATING,
        isAnimating,
    };
}
