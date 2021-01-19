import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { RootStateType } from './../redux/rootReducer';
import { HomePage } from './../pages/home/Home.page';
import { NotFountPage } from './../pages/notFount/NotFound.page';
import { AuthPage } from './../pages/auth/Auth.page';

export const Routers: React.FC = () => {
    const user = useSelector((state: RootStateType) => state.userState.user);

    return (
        <Switch>
            <Route exact path={'/'} component={AuthPage} />
            {user && <Route exact path={'/home'} component={HomePage} />}
            <Route path={'*'} component={NotFountPage} />
        </Switch>
    );
};
