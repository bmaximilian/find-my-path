import { connect, DispatchProp } from 'react-redux';
import { initialState, State } from './store/state/initialState';
import React from 'react';
import { Cell, dijkstra, Result } from './algorithms/dijkstra';
import { setCellAsShortestPath, setCellAsVisited } from './store/actions/mapActions';

interface RawExecutorProps extends DispatchProp {
    grid: typeof initialState.map.grid;
}

const VISITED_ANIMATION_TIMEOUT = .01;
const SHORTEST_PATH_ANIMATION_TIMEOUT = .05;

function RawExecutor({ grid, dispatch }: RawExecutorProps) {
    const animateShortestPath = (shortestPath: Cell[]): void => {
        for (let i = 0; i < shortestPath.length; i += 1) {
            setTimeout(() => {
                dispatch(setCellAsShortestPath(shortestPath[i]));
            }, 1000 * SHORTEST_PATH_ANIMATION_TIMEOUT * i)
        }
    }

    const animateSearch = (result: Result): void => {
        for (let i = 0; i < result.visited.length; i += 1) {
            setTimeout(() => {
                dispatch(setCellAsVisited(result.visited[i]));

                if (i === result.visited.length - 1) {
                    animateShortestPath(result.shortestPath);
                }
            }, 1000 * VISITED_ANIMATION_TIMEOUT * i);
        }
    }

    const startPathFinding = () => {
        const searchResult = dijkstra(grid);
        animateSearch(searchResult);
    }

    return <button onClick={startPathFinding}>Find with Dijkstra</button>;
}

export const Executor = connect((state: State) => ({ grid: state.map.grid }))(RawExecutor);
