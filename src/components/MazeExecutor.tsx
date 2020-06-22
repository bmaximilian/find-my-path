import { connect, DispatchProp } from 'react-redux';
import { initialState, State } from '../store/state/initialState';
import React from 'react';
import { Button } from '@material-ui/core';
import { depthFirst } from '../algorithms/maze/depth-first';
import { replaceGrid } from '../store/actions/mapActions';

interface RawMazeExecutorProps extends DispatchProp {
    grid: typeof initialState.map.grid;
    isGridDirty: boolean;
}

function RawMazeExecutor({ grid, dispatch, isGridDirty }: RawMazeExecutorProps) {
    const execute = () => {
        const newGrid = depthFirst(grid);
        dispatch(replaceGrid(newGrid));
    }

    return (
        <Button onClick={execute} color="inherit" disabled={isGridDirty}>
            Generate Maze
        </Button>
    );
}

export const MazeExecutor = connect((state: State) => ({
    grid: state.map.grid,
    isGridDirty: state.map.isDirty,
}))(RawMazeExecutor);
