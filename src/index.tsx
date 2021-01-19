import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { store } from './redux/rootReducer';

const app: JSX.Element = (
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

render(app, document.getElementById('root'));

reportWebVitals();
