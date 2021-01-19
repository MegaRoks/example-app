import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { store } from './redux/rootReducer';
import { rootSaga } from './redux/rootSaga';
import { sagaMiddleware } from './redux/middlewares';

sagaMiddleware.run(rootSaga);

const app: JSX.Element = (
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

render(app, document.getElementById('root'));

reportWebVitals();
