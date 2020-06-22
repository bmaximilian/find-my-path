import { Cell, CellTypes } from '../models/Cell';

interface Node extends Cell {
    distance: number;
    prevCell?: Node;
}

function sortByDistance(list: Node[]): Node[] {
    return list.sort((a, b) => a.distance - b.distance);
}

function findFirstNodeOfType(type: CellTypes, list: Node[]): Node | null {
    const index = list.findIndex(cell => cell.type === type);
    return index === -1 ? null : list[index];
}

function getUnvisitedNeighbors(grid: Node[][], cell: Node): Node[] {
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

function updateNeighbors(grid: Node[][], cell: Node) {
    const neighbors = getUnvisitedNeighbors(grid, cell);

    neighbors.forEach((neighbor) => {
        neighbor.distance = cell.distance + 1;
        neighbor.prevCell = cell;
    });
}

function getShortestPathFromVisitedNodes(end: Node): Node[] {
    const shortestPath = [];
    let currentCell = end.prevCell;

    while(currentCell?.prevCell) {
        shortestPath.push(currentCell);
        currentCell = currentCell.prevCell;
    }

    return shortestPath;
}

export interface Result {
    shortestPath: Node[];
    visited: Node[];
}

export function dijkstra(grid: Cell[][]): Result {
    const gridClone: Node[][] = grid.map(row => [...row.map(cell => ({
        ...cell,
        distance: Infinity,
        prevCell: undefined,
    }))]);

    const visited = [];
    const unvisited = gridClone.reduce((flat, currentRow) => [...flat, ...currentRow], []);
    const start = findFirstNodeOfType(CellTypes.START, unvisited);

    if (!start) {
        throw new Error('Start point is missing');
    }

    start.distance = 0;

    while(unvisited.length > unvisited.length - 1) {
        const sortedNodes = sortByDistance(unvisited);
        const current = sortedNodes.shift() as Node; // Undefined cant happen because while cond.

        if (current?.type === CellTypes.OBSTACLE) continue;

        current.isVisited = true;

        visited.push(current);
        if (current.type === CellTypes.END) break;
        updateNeighbors(gridClone, current);
    }

    return {
        visited: visited,
        shortestPath: visited?.length > 0
            ? getShortestPathFromVisitedNodes(visited[visited.length - 1])
            : [],
    };
}
