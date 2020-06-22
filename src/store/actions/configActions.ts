import { Action } from 'redux';
import { Algorithm } from '../../models/Algorithm';

export const SET_SELECTED_ALGORITHM = 'CONFIG::SET_SELECTED_ALGORITHM';

export function setSelectedAlgorithm(algorithm: Algorithm): Action<typeof SET_SELECTED_ALGORITHM> & { algorithm: Algorithm } {
    return {
        type: SET_SELECTED_ALGORITHM,
        algorithm,
    };
}
