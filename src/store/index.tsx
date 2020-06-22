import React, { PropsWithChildren } from 'react';
import { combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from './state/initialState';
import { map } from './reducer/map';
import { config } from './reducer/config';

const enhancers: Function[] = [];

export const store = createStore(
    combineReducers({ map, config }),
    initialState,
    process.env.NODE_ENV === 'development'
        ? require('redux-devtools-extension').composeWithDevTools(...enhancers)
        : compose(...enhancers),
);

export function Store(props: PropsWithChildren<{}>) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
