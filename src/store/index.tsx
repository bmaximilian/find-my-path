import React, { PropsWithChildren } from 'react';
import { combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from './state/initialState';

const enhancers: Function[] = [];

export const store = createStore(
    combineReducers({}),
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
