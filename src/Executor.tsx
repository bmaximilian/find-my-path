import { connect, DispatchProp } from 'react-redux';
import { initialState, State } from './store/state/initialState';
import React from 'react';
import { dijkstra, Result } from './algorithms/dijkstra';

interface RawExecutorProps extends DispatchProp {
    grid: typeof initialState.map.grid;
}

const VISITED_ANIMATION_TIMEOUT = .005;
const SHORTEST_PATH_ANIMATION_TIMEOUT = .01;

function RawExecutor({ grid }: RawExecutorProps) {
    const animateShortestPath = (result: Result): void => {
        for (let i = 0; i < result.shortestPath.length; i += 1) {
            setTimeout(() => {
                document.getElementById(`${result.shortestPath[i].row}-${result.shortestPath[i].col}`)?.classList.add('cell--shortest-path');
            }, 1000 * SHORTEST_PATH_ANIMATION_TIMEOUT * i)
        }
    }

    const animateSearch = (result: Result): void => {
        for (let i = 0; i < result.visited.length; i += 1) {
            setTimeout(() => {
                document.getElementById(`${result.visited[i].row}-${result.visited[i].col}`)?.classList.add('cell--visited');

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

    return <button onClick={startPathFinding}>Find with Dijkstra</button>;
}

export const Executor = connect((state: State) => ({ grid: state.map.grid }))(RawExecutor);
