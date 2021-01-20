import React from 'react';
import { useDispatch } from 'react-redux';

import './Auth.style.scss';
import { SignInComponent } from './../../components/signIn/SignIn.component';
import { IAuthData, IAuthProps } from './Auth.interface';
import { useStep } from '../../hooks/useStep';
import { LoaderComponent } from './../../components/UI/loader/Loader.component';
import { VerifyCodeComponent } from './../../components/verifyCode/VerifyCode.component';
import { useSignInSelector } from '../../redux/reducers/signIn/signIn.hook';
import { signInStart } from '../../redux/reducers/signIn/signIn.action';

const steps = [{ id: 'sign-in' }, { id: 'verifyCode' }];

export const AuthPage: React.FC<IAuthProps> = ({ history }: IAuthProps) => {
    const dispatch = useDispatch();
    const { loading: IsSignInLoading } = useSignInSelector();

    console.log('IsSignInLoading', IsSignInLoading);

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
                (IsSignInLoading ? (
                    <LoaderComponent />
                ) : (
                    <SignInComponent onClick={signInHandler} />
                ))}
            {step.id === 'verifyCode' &&
                (IsSignInLoading ? (
                    <LoaderComponent />
                ) : (
                    <VerifyCodeComponent onClick={sendCodeHandler} />
                ))}
        </div>
    );
};
