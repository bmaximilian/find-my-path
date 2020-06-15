import React from 'react';
import { CellType } from './store/state/initialState';

interface NodeProps {
    row: number;
    column: number;
    size: number;
    type: CellType;
}

export function Node(props: NodeProps): JSX.Element {
    return <td
        className={`map__cell cell--${props.type}`}
        style={{ width: props.size, height: props.size - 1 /* 1px is border */ }}
    />
}
