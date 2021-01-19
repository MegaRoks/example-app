import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Routers } from './routers/Routers';
import { checkUserSession } from './redux/reducers/user/user.actions';

export const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
};
