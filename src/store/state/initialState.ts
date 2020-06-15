const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;

const cellSize = 15;

const cellsPerRow = Math.floor(width / cellSize);
const rowsCount = Math.floor(height / cellSize);

export type CellType = 'free' | 'obstacle' | 'start' | 'waypoint' | 'end';

export interface Cell {
    size: number;
    type: CellType;
    isVisited: boolean;
    row: number;
    col: number;
}

export interface State {
    map: {
        grid: Cell[][];
    };
}

export const initialState: State = {
    map: {
        grid: Array(rowsCount).fill(0).map((_, rowIndex) => {
            return Array(cellsPerRow).fill(0).map((_1, colIndex) => {
                let type: CellType = 'free';
                const isMiddleRow = rowIndex + 1 === rowsCount / 2;

                if (isMiddleRow && colIndex + 1 === Math.floor(cellsPerRow * 0.25)) {
                    type = 'start';
                } else if (isMiddleRow && colIndex + 1 === Math.floor(cellsPerRow * 0.75)) {
                    type = 'end';
                }

                return {
                    size: cellSize,
                    type,
                    isVisited: false,
                    row: rowIndex,
                    col: colIndex,
                };
            });
        }),
    }
}
