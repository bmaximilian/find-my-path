import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Algorithm } from '../models/Algorithm';
import { AlgorithmSelect } from './AlgorithmSelect';
import { Executor } from './Executor';
import { MazeExecutor } from './MazeExecutor';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
}));

interface HeaderBarProps {
    algorithms: Algorithm[];
    selectedAlgorithmIndex: number;
    isAnimating: boolean;
    onSelectAlgorithm: (algorithm: Algorithm) => void;
    onClearGrid: () => void;
}

export function HeaderBar({ algorithms, selectedAlgorithmIndex, onSelectAlgorithm, onClearGrid, isAnimating }: HeaderBarProps) {
    const classes = useStyles();
    const selectedAlgorithm = algorithms[selectedAlgorithmIndex];

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Find my Path
                </Typography>
                <MazeExecutor />
                <AlgorithmSelect
                    algorithms={algorithms}
                    selectedAlgorithm={selectedAlgorithm}
                    onSelect={onSelectAlgorithm}
                />
                <Executor selectedAlgorithm={selectedAlgorithm} />
                <Button onClick={onClearGrid} color="inherit" disabled={isAnimating}>Clear</Button>
            </Toolbar>
        </AppBar>
    );
}
