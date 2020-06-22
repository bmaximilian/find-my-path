import { Cell } from '../../models/Cell';
import { Algorithm } from '../../models/Algorithm';

export interface State {
    map: {
        grid: Cell[][];
        isDirty: boolean;
        isAnimating: boolean;
    };
    config: {
        algorithms: Algorithm[];
        selectedAlgorithmIndex: number;
    };
}

export const initialState: State = {
    map: {
        grid: [],
        isDirty: false,
        isAnimating: false,
    },
    config: {
        algorithms: [
            { name: 'Dijkstra', id: '1' },
        ],
        selectedAlgorithmIndex: 0,
    },
}
