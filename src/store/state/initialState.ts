const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;

const cellSize = 15;

const cellsPerRow = Math.floor(width / cellSize);
const rowsCount = Math.floor(height / cellSize);

export interface Cell {
    size: number;
    type: 'free' | 'obstacle';
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
                return {
                    size: cellSize,
                    type: 'free',
                    isVisited: false,
                    row: rowIndex,
                    col: colIndex,
                };
            });
        }),
    }
}
