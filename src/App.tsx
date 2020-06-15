import React from 'react';
import './App.css';
import { Node } from './Node';

const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;

const cellSize = 15;

const cellsPerRow = Math.floor(width / cellSize);
const rowsCount = Math.floor(height / cellSize);

const rows = Array(rowsCount).fill(0).map((_, rowIndex) => {
    return Array(cellsPerRow).fill(0).map((_1, colIndex) => {
        return {
            size: cellSize,
            type: 'free',
            isVisited: false,
            row: rowIndex,
            col: colIndex,
        };
    });
});

function App() {
    return (
        <div className="App">
            <table className="map">
                <tbody>
                    {rows.map((row, rowId) => (
                        <tr key={rowId}>
                            {row.map((cell) => <Node
                                key={`${cell.row}-${cell.col}`}
                                row={cell.row}
                                column={cell.col}
                                size={cell.size}
                            />)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
