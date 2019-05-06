import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import createStore from './createStore';

const store = createStore({});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AppNavigator />
            </Provider>
        );
    }
}
