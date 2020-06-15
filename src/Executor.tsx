import { connect, DispatchProp } from 'react-redux';
import { Cell, initialState, State } from './store/state/initialState';
import React from 'react';
import { CellTypes, dijkstra, Result } from './algorithms/dijkstra';
import { depthFirst } from './algorithms/maze/depth-first';
import { replaceGrid } from './store/actions/mapActions';

interface RawExecutorProps extends DispatchProp {
    grid: typeof initialState.map.grid;
}

const VISITED_ANIMATION_TIMEOUT = .005;
const SHORTEST_PATH_ANIMATION_TIMEOUT = .01;

function setClassForCell(cell: Cell, className: string) {
    document.getElementById(`${cell.row}-${cell.col}`)?.classList.add(className);
}

function RawExecutor({ grid, dispatch }: RawExecutorProps) {
    const animateShortestPath = (result: Result): void => {
        for (let i = 0; i < result.shortestPath.length; i += 1) {
            setTimeout(() => {
                setClassForCell(result.shortestPath[i], 'cell--shortest-path');
            }, 1000 * SHORTEST_PATH_ANIMATION_TIMEOUT * i)
        }
    }

    const animateSearch = (result: Result): void => {
        for (let i = 0; i < result.visited.length; i += 1) {
            setTimeout(() => {
                setClassForCell(result.visited[i], 'cell--visited');

                if (i === result.visited.length - 1) {
                    animateShortestPath(result);
                }
            }, 1000 * VISITED_ANIMATION_TIMEOUT * i);
        }
    }

    const startPathFinding = () => {
        const searchResult = dijkstra(grid);
        animateSearch(searchResult);
    }

    const generateMaze = () => {
        const newMazeGrid = depthFirst(grid);
        dispatch(replaceGrid(newMazeGrid));
    }

    return (
        <>
            <button onClick={startPathFinding}>Find with Dijkstra</button>
            <button onClick={generateMaze}>Generate Maze</button>
        </>
    );
}

export const Executor = connect((state: State) => ({ grid: state.map.grid }))(RawExecutor);
