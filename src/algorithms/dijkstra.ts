export enum CellTypes {
    OBSTACLE = 'obstacle',
    START = 'start',
    END = 'end',
    FREE = 'free',
}

export interface Cell {
    size: number;
    col: number;
    row: number;
    distance: number;
    isVisited: boolean;
    type: CellTypes;
    prevCell?: Cell;
}

export type OuterCell = Omit<Cell, keyof {distance: any, prevCell: any}>

function sortByDistance(list: Cell[]): Cell[] {
    return list.sort((a, b) => a.distance - b.distance);
}

function findFirstCellOfType(type: CellTypes, list: Cell[]): Cell|null {
    const index = list.findIndex(cell => cell.type === type);
    return index === -1 ? null : list[index];
}

function getUnvisitedNeighbors(grid: Cell[][], cell: Cell): Cell[] {
    const neighbors = [];

    // Check the upper cell
    if (cell.row > 0 && !grid[cell.row - 1][cell.col].isVisited)
        neighbors.push(grid[cell.row - 1][cell.col]);

    // check the lower cell
    if (cell.row < grid.length - 1 && !grid[cell.row + 1][cell.col].isVisited)
        neighbors.push(grid[cell.row + 1][cell.col]);

    // check the left cell
    if (cell.col > 0 && !grid[cell.row][cell.col - 1].isVisited)
        neighbors.push(grid[cell.row][cell.col - 1]);

    // check the right cell
    if (cell.col < grid[cell.row].length - 1 && !grid[cell.row][cell.col + 1].isVisited)
        neighbors.push(grid[cell.row][cell.col + 1]);

    return neighbors;
}

function updateNeighbors(grid: Cell[][], cell: Cell) {
    const neighbors = getUnvisitedNeighbors(grid, cell);

    neighbors.forEach((neighbor) => {
        neighbor.distance = cell.distance + 1;
        neighbor.prevCell = cell;
    });
}

function getShortestPathFromVisitedCells(end: Cell): Cell[] {
    const shortestPath = [];
    let currentCell = end.prevCell;

    while(currentCell?.prevCell) {
        shortestPath.push(currentCell);
        currentCell = currentCell.prevCell;
    }

    return shortestPath;
}

export interface Result {
    shortestPath: Cell[];
    visited: Cell[];
}

export function dijkstra(grid: OuterCell[][], onVisitCell?: (cell: Cell) => void): Result {
    const gridClone: Cell[][] = grid.map(row => [...row.map(cell => ({
        ...cell,
        distance: Infinity,
        prevCell: undefined,
    }))]);

    const visitedCells = [];
    const unvisitedCells = gridClone.reduce((flat, currentRow) => [...flat, ...currentRow], []);
    const start = findFirstCellOfType(CellTypes.START, unvisitedCells);

    if (!start) {
        throw new Error('Start point is missing');
    }

    start.distance = 0;

    while(unvisitedCells.length > unvisitedCells.length - 1) {
        const sortedCells = sortByDistance(unvisitedCells);
        const closestCell = sortedCells.shift() as Cell; // Undefined cant happen because while cond.

        if (closestCell?.type === CellTypes.OBSTACLE) continue;

        closestCell.isVisited = true;
        if (onVisitCell) onVisitCell(closestCell);

        visitedCells.push(closestCell);
        if (closestCell.type === CellTypes.END) break;
        updateNeighbors(gridClone, closestCell);
    }

    return {
        visited: visitedCells,
        shortestPath: visitedCells?.length > 0
            ? getShortestPathFromVisitedCells(visitedCells[visitedCells.length - 1])
            : [],
    };
}
