import React from 'react';

interface NodeProps {
    row: number;
    column: number;
    size: number;
}

export function Node(props: NodeProps): JSX.Element {
    return <td className="map__cell" style={{ width: props.size, height: props.size - 1 /* 1px is border */ }} />
}
