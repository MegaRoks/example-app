import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Auth.style.scss';
import { signInStart } from './../../redux/reducers/user/user.actions';
import { SignInComponent } from './../../components/signIn/SignIn.component';
import { IAuthData, IAuthProps } from './Auth.interface';
import { useStep } from './../../utils/useStep';
import { RootStateType } from '../../redux/rootReducer';
import { LoaderComponent } from '../../components/UI/loader/Loader.component';
import { VerifyCodeComponent } from '../../components/verifyCode/VerifyCode.component';

const steps = [{ id: 'sign-in' }, { id: 'verifyCode' }];

export const AuthPage: React.FC<IAuthProps> = ({ history }: IAuthProps) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootStateType) => state.loaderState.isLoader);
    const { step, navigation } = useStep(steps, 0);

    const signInHandler = (body: IAuthData) => {
        const data = { ...body, navigation };

        dispatch(signInStart(data));
    };

    const sendCodeHandler = (code: string) => {
        console.log(code);
    };

    return (
        <div className="auth__container">
            {step.id === 'sign-in' &&
                (isLoading ? <LoaderComponent /> : <SignInComponent onClick={signInHandler} />)}
            {step.id === 'verifyCode' &&
                (isLoading ? (
                    <LoaderComponent />
                ) : (
                    <VerifyCodeComponent onClick={sendCodeHandler} />
                ))}
        </div>
    );
};
