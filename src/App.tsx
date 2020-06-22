import React, { useCallback, useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import './App.css';
import { State, initialState } from './store/state/initialState';
import { replaceGrid, setCellAsObstacle, setGridDirty } from './store/actions/mapActions';
import { Cell } from './models/Cell';
import { Algorithm } from './models/Algorithm';
import { setSelectedAlgorithm } from './store/actions/configActions';
import { Grid } from './components/Grid';
import { HeaderBar } from './components/HeaderBar';
import { generateGrid } from './util/generateGrid';
import { declareClassForCell, setClassForCell } from './components/Executor';

interface AppProps extends DispatchProp {
    algorithms: Algorithm[];
    selectedAlgorithmIndex: number;
    isAnimating: boolean;
}

function App({ dispatch, algorithms, selectedAlgorithmIndex, isAnimating }: AppProps) {
    const handleSelectAlgorithm = (algorithm: Algorithm) => {
        dispatch(setSelectedAlgorithm(algorithm));
    }

    const handleSetCellAsObstacle = (cell: Cell) => {
        dispatch(setCellAsObstacle(cell));
    }

    const handleGenerateGrid = useCallback(() => {
        const grid = generateGrid();
        dispatch(replaceGrid(grid));

        grid.forEach(row => row.forEach((cell) => {
            setClassForCell(cell, declareClassForCell(cell));
        }));

        dispatch(setGridDirty(false));
    }, [dispatch]);

    useEffect(() => {
        handleGenerateGrid();
    }, [handleGenerateGrid]);

    return (
        <div className="App">
            <HeaderBar
                algorithms={algorithms}
                selectedAlgorithmIndex={selectedAlgorithmIndex}
                onSelectAlgorithm={handleSelectAlgorithm}
                onClearGrid={handleGenerateGrid}
                isAnimating={isAnimating}
            />
            <Grid onSetCellAsObstacle={handleSetCellAsObstacle} />
        </div>
    );
}

const mapStateToProps = (state: State) => ({
    algorithms: state?.config?.algorithms || initialState.config.algorithms,
    selectedAlgorithmIndex: state?.config?.selectedAlgorithmIndex || initialState.config.selectedAlgorithmIndex,
    isAnimating: state?.map?.isAnimating,
});

export default connect(mapStateToProps)(App);
