import { Node } from './Node';
import React, { memo } from 'react';
import { Cell } from '../models/Cell';
import { connect, DispatchProp } from 'react-redux';
import { initialState, State } from '../store/state/initialState';

interface GridProps extends DispatchProp {
    grid: Cell[][];
    onSetCellAsObstacle: (cell: Cell) => void;
}

let isMouseDown = false;
function setMouseDown(newValue: boolean) {
    isMouseDown = newValue;
}

export function RawGrid({ grid, onSetCellAsObstacle }: GridProps) {
    const handleMouseEnter = (cell: Cell) => {
        if (!isMouseDown || cell.type !== 'free') return;

        onSetCellAsObstacle(cell);
    };

    return (
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
    );
}

export const Grid = connect((state: State) => ({
    grid: state.map?.grid || initialState.map.grid,
}))(memo(
    RawGrid,
    (prevProps, nextProps) => {
        if ((!prevProps.grid || prevProps.grid.length === 0) && nextProps?.grid.length > 0) {
            return false;
        }

        return true;
    },
));
