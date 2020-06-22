import { connect, DispatchProp } from 'react-redux';
import { Button } from '@material-ui/core';
import React from 'react';
import { initialState, State } from '../store/state/initialState';
import { setGridAnimating, setGridDirty } from '../store/actions/mapActions';
import { dijkstra, Result } from '../algorithms/dijkstra';
import { Cell, CellTypes } from '../models/Cell';
import { Algorithm } from '../models/Algorithm';

interface RawExecutorProps extends DispatchProp {
    grid: typeof initialState.map.grid;
    selectedAlgorithm: Algorithm;
    isGridDirty: boolean;
}

const VISITED_ANIMATION_TIMEOUT = .005;
const SHORTEST_PATH_ANIMATION_TIMEOUT = .01;

export function setClassForCell(cell: Cell, newClassName: string) {
    const element = document.getElementById(`${cell.row}-${cell.col}`);
    if (!element) return;

    const classesToRemove: string[] = [];
    element.classList.forEach((className) => {
        if (className.startsWith('cell--')) {
            classesToRemove.push(className);
        }
    });
    element.classList.remove(...classesToRemove);

    element.classList.add(newClassName);
}

export function declareClassForCell(cell: Cell): string {
    if ([CellTypes.OBSTACLE, CellTypes.START, CellTypes.END].includes(cell.type)) return `cell--${cell.type}`;
    if (cell.isShortestPath) return 'cell--shortest-path';
    if (cell.isVisited) return 'cell--visited';

    return 'cell--free';
}

const ALGORITHMS: {[id: string]: (grid: Cell[][]) => Result} = {
    '1': dijkstra,
};

function RawExecutor({ grid, selectedAlgorithm, dispatch, isGridDirty }: RawExecutorProps) {
    const animateShortestPath = (result: Result): void => {
        for (let i = 0; i < result.shortestPath.length; i += 1) {
            setTimeout(() => {
                if ([CellTypes.START, CellTypes.END].includes(result.shortestPath[i].type)) return;

                setClassForCell(result.shortestPath[i], 'cell--shortest-path');

                if (i === result.shortestPath.length - 1) {
                    dispatch(setGridAnimating(false));
                }
            }, 1000 * SHORTEST_PATH_ANIMATION_TIMEOUT * i)
        }
    }

    const animateSearch = (result: Result): void => {
        for (let i = 0; i < result.visited.length; i += 1) {
            setTimeout(() => {
                if (![CellTypes.START, CellTypes.END].includes(result.visited[i].type)) {
                    setClassForCell(result.visited[i], 'cell--visited');
                }

                if (i === result.visited.length - 1) {
                    animateShortestPath(result);
                }
            }, 1000 * VISITED_ANIMATION_TIMEOUT * i);
        }
    }

    const startPathFinding = () => {
        const algorithm = ALGORITHMS[selectedAlgorithm.id];
        if (!algorithm) {
            throw new Error('Selected algorithm is not defined');
        }

        dispatch(setGridAnimating(true));
        dispatch(setGridDirty(true));
        const searchResult = algorithm(grid);
        animateSearch(searchResult);
    }

    return (
        <Button onClick={startPathFinding} color="secondary" variant="contained" disabled={isGridDirty}>
            Find with {selectedAlgorithm.name}
        </Button>
    );
}

export const Executor = connect((state: State) => ({
    grid: state.map.grid,
    isGridDirty: state.map.isDirty,
}))(RawExecutor);
