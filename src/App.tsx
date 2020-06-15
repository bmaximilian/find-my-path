import React, { memo } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Node } from './Node';
import { Cell, State, initialState } from './store/state/initialState';

interface AppProps {
    grid: Cell[][];
}

function App(props: AppProps) {
    return (
        <div className="App">
            <table className="map">
                <tbody>
                    {props.grid.map((row, rowId) => (
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

const mapStateToProps = (state: State) => ({
    grid: state?.map?.grid || initialState.map.grid,
});

export default connect(mapStateToProps)(memo(
    App,
    (prevProps, nextProps) => {
        if ((!prevProps.grid || prevProps.grid.length === 0) && nextProps?.grid.length > 0) {
            return false;
        }

        return true;
    },
));
