import React, { MouseEvent } from 'react';
import { Cell, State } from './store/state/initialState';
import { connect } from 'react-redux';

interface NodeProps {
    cell: Cell;
    onMouseDown: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseUp: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseEnter: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseLeave: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
    onMouseMove: (cell: Cell, e: MouseEvent<HTMLTableCellElement>) => void;
}

function RawNode(props: NodeProps): JSX.Element {
    return <td
        className={`map__cell cell--${props.cell.type}`}
        style={{ width: props.cell.size, height: props.cell.size - 1 /* 1px is border */ }}
        onMouseDown={(e) => props.onMouseDown(props.cell, e)}
        onMouseUp={(e) => props.onMouseUp(props.cell, e)}
        onMouseEnter={(e) => props.onMouseEnter(props.cell, e)}
        onMouseLeave={(e) => props.onMouseLeave(props.cell, e)}
        onMouseMove={(e) => props.onMouseMove(props.cell, e)}
    />
}

export const Node = connect((state: State, outerProps: { row: number; col: number; }) => ({
    cell: state.map.grid[outerProps.row][outerProps.col],
}))(RawNode);

