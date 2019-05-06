import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
const logger = createLogger();

export default function configureStore(initialState: any) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                logger,
                sagaMiddleware
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
