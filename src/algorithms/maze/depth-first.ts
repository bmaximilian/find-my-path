import { CellTypes, OuterCell as Cell } from '../dijkstra';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const excludedTypes = [CellTypes.START, CellTypes.END];

export function depthFirst(grid: Cell[][]): Cell[][] {
    // Everything is a wall first
    const gridClone = grid.map(row => [...row.map(cell => ({
        ...cell,
        type: excludedTypes.includes(cell.type) ? cell.type : CellTypes.OBSTACLE,
    }))]);


    function examineDirections(cell: Cell) {
        const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'].sort(() => Math.random() - 0.5);

        function setCellTypes(cell1: Cell, cell2: Cell) {
            if (cell2.type !== CellTypes.FREE) {
                cell2.type = excludedTypes.includes(cell2.type) ? cell2.type : CellTypes.FREE;
                cell1.type = excludedTypes.includes(cell1.type) ? cell1.type : CellTypes.FREE;
                examineDirections(cell2);
            }
        }

        directions.forEach((direction) => {
            switch (direction) {
                case 'UP': {
                    if (cell.row - 2 <= 0) break;

                    setCellTypes(
                        gridClone[cell.row - 1][cell.col],
                        gridClone[cell.row - 2][cell.col],
                    );

                    break;
                }
                case 'DOWN': {
                    if (cell.row + 2 >= gridClone.length - 1) break;

                    setCellTypes(
                        gridClone[cell.row + 1][cell.col],
                        gridClone[cell.row + 2][cell.col],
                    );

                    break;
                }
                case 'LEFT':
                    if (cell.col - 2 <= 0) break;

                    setCellTypes(
                        gridClone[cell.row][cell.col - 1],
                        gridClone[cell.row][cell.col - 2],
                    );

                    break;
                case 'RIGHT':
                    if (cell.col + 2 >= gridClone[cell.row].length - 1) break;

                    setCellTypes(
                        gridClone[cell.row][cell.col + 1],
                        gridClone[cell.row][cell.col + 2],
                    );

                    break;
            }
        });
    }

    const start = gridClone[getRandomInt(0, gridClone.length - 1)][getRandomInt(0, gridClone[0].length - 1)];
    examineDirections(start);
    return gridClone;
}
