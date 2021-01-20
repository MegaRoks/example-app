import React from 'react';
import { useForm } from 'react-hook-form';

import './SignIn.style.scss';
import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';
import { CheckboxComponent } from './../UI/checkbox/Checkbox.component';
import { ISignInProps } from './SignIn.interface';
import { useInput } from '../../hooks/useInput';

export const SignInComponent: React.FC<ISignInProps> = ({ onClick }: ISignInProps) => {
    const checkboxRememberMe = useInput(false);
    const { register, handleSubmit, getValues, errors } = useForm();

    const signInHandler = (data: any) => {
        console.log('data', data);
        const body = {
            email: getValues('email'),
            password: getValues('password'),
            isSafeAuth: checkboxRememberMe.value,
        };

        onClick(body);
    };

    const errorsEmail: Record<string, React.ReactElement> = {
        pattern: <span className="sign-in__error">Email is incorrect</span>,
        required: <span className="sign-in__error">Email is required</span>,
    };

    const errorPassword: Record<string, React.ReactElement> = {
        required: <span className="sign-in__error">Password is required</span>,
        minLength: <span className="sign-in__error">Password is be more 6 letters</span>,
        maxLength: <span className="sign-in__error">Password is be less 12 letters</span>,
    };

    return (
        <form className="sign-in__form" onSubmit={handleSubmit(signInHandler)}>
            <div className="sign-in-label">LOGIN TO SERVICE</div>
            <div className="sign-in__inputs-container">
                {errorsEmail[errors.email?.type]}
                <InputComponent
                    id="email-sign-in"
                    type="text"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />

                {errorPassword[errors.password?.type]}
                <InputComponent
                    id="password-sign-in"
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={register({ required: true, minLength: 6, maxLength: 12 })}
                />
            </div>

            <div className="sign-in__controls">
                <CheckboxComponent
                    id={'checkbox-sign-in'}
                    name={'remember-me'}
                    label={'Remember me'}
                    checked={checkboxRememberMe.value}
                    onChange={checkboxRememberMe.onChange}
                />

                <ButtonComponent id={'button-sign-in'} type={'submit'} text={'Sign In'} />
            </div>
        </form>
    );
};
