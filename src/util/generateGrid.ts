import { Cell, CellTypes } from '../models/Cell';

const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;

const cellSize = 15;

const cellsPerRow = Math.floor(width / cellSize);
const rowsCount = Math.floor(height / cellSize);

export function generateGrid(): Cell[][] {
    return Array(rowsCount).fill(0).map((_, rowIndex) => {
        const isMiddleRow = rowIndex + 1 === Math.floor(rowsCount / 2);

        return Array(cellsPerRow).fill(0).map((_1, colIndex) => {
            let type = CellTypes.FREE;

            if (isMiddleRow && colIndex + 1 === Math.floor(cellsPerRow * 0.25)) {
                type = CellTypes.START;
            } else if (isMiddleRow && colIndex + 1 === Math.floor(cellsPerRow * 0.75)) {
                type = CellTypes.END;
            }

            return {
                size: cellSize,
                type,
                isVisited: false,
                isShortestPath: false,
                row: rowIndex,
                col: colIndex,
            };
        });
    });
}
