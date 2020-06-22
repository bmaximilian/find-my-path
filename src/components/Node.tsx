import React, { MouseEvent } from 'react';
import { Cell } from '../models/Cell';
import { State } from '../store/state/initialState';
import { connect } from 'react-redux';
import { declareClassForCell } from './Executor';

interface NodeProps {
    cell: Cell;
    onMouseDown: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseUp: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseEnter: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseLeave: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseMove: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
}

function RawNode(props: NodeProps): JSX.Element {
    const classes = ['map__cell'];
    classes.push(declareClassForCell(props.cell));

    return <td
        id={`${props.cell.row}-${props.cell.col}`}
        className={classes.join(' ')}
        style={{ width: props.cell.size, height: props.cell.size - 1 /* 1px is border */ }}
        onMouseDown={(e) => props.onMouseDown(props.cell, e)}
        onMouseUp={(e) => props.onMouseUp(props.cell, e)}
        onMouseEnter={(e) => props.onMouseEnter(props.cell, e)}
        onMouseLeave={(e) => props.onMouseLeave(props.cell, e)}
        onMouseMove={(e) => props.onMouseMove(props.cell, e)}
    />
}

export const Node = connect((_: State, outerProps: { row: number; col: number; }) => {
    return (state: State) => ({
        cell: state.map.grid[outerProps.row][outerProps.col],
    });
})(RawNode);

