import React, { memo, useState } from 'react';
import { connect, DispatchProp } from 'react-redux';
import './App.css';
import { Node } from './Node';
import { Cell, State, initialState } from './store/state/initialState';
import { setCellAsObstacle } from './store/actions/mapActions';

interface AppProps extends DispatchProp {
    grid: Cell[][];
}

let isMouseDown = false;
function setMouseDown(newValue: boolean) {
    isMouseDown = newValue;
}

function App({ dispatch, grid }: AppProps) {
    const handleMouseEnter = (cell: Cell) => {
        if (!isMouseDown) return;

        dispatch(setCellAsObstacle(cell));
    };

    return (
        <div className="App">
            <table className="map">
                <tbody>
                    {grid.map((row, rowId) => (
                        <tr key={rowId}>
                            {row.map((cell) => <Node
                                key={`${cell.row}-${cell.col}`}
                                row={cell.row}
                                col={cell.col}
                                onMouseDown={() => setMouseDown(true)}
                                onMouseUp={() => setMouseDown(false)}
                                onMouseLeave={() => {}}
                                onMouseEnter={() => {}}
                                onMouseMove={handleMouseEnter}
                            />)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state: State) => ({
    grid: state?.map?.grid || initialState.map.grid,
});

export default connect(mapStateToProps)(memo(
    App,
    (prevProps, nextProps) => {
        if ((!prevProps.grid || prevProps.grid.length === 0) && nextProps?.grid.length > 0) {
            return false;
        }

        return true;
    },
));
