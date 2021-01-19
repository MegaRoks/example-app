import React from 'react';

import './SignIn.style.scss';
import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';
import { CheckboxComponent } from './../UI/checkbox/Checkbox.component';
import { ISignInProps } from './SignIn.interface';
import { useInput } from './../../utils/useInput';

export const SignInComponent: React.FC<ISignInProps> = ({ onClick }: ISignInProps) => {
    const inputEmail = useInput('');
    const inputPassword = useInput('');
    const checkboxRememberMe = useInput(false);

    const signInHandler = () => {
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
            isSafeAuth: checkboxRememberMe.value,
        };

        onClick(body);
    };

    return (
        <form className="sign-in__form" onSubmit={signInHandler}>
            <InputComponent
                id="email-sign-in"
                type="email"
                name="Email"
                value={inputEmail.value}
                onChange={inputEmail.onChange}
            />

            <InputComponent
                id="password-sign-in"
                type="password"
                name="Password"
                value={inputPassword.value}
                onChange={inputPassword.onChange}
            />

            <ButtonComponent
                id={'button-sign-in'}
                type={'submit'}
                text={'Sign In'}
                onClick={signInHandler}
            />

            <CheckboxComponent
                id={'checkbox-sign-in'}
                name={'remember-me'}
                label={'Remember me'}
                checked={checkboxRememberMe.value}
                onChange={checkboxRememberMe.onChange}
            />
        </form>
    );
};
