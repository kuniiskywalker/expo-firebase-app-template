import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import AppNavigator from './navigation/AppNavigator';

const logger = createLogger();

const store = createStore(
    reducers,
    {},
    applyMiddleware(
        logger,
        ReduxThunk
    )
);

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AppNavigator />
            </Provider>
        );
    }
}

export default App;
