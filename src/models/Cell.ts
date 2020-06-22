export enum CellTypes {
    OBSTACLE = 'obstacle',
    START = 'start',
    END = 'end',
    FREE = 'free',
}

export interface Cell {
    size: number;
    type: CellTypes;
    isVisited: boolean;
    isShortestPath?: boolean;
    row: number;
    col: number;
}
