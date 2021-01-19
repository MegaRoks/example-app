import React from 'react';

import './VerifyCode.style.scss';
import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';
import { IVerifyCodeProps } from './VerifyCode.interface';
import { useInput } from './../../utils/useInput';

export const VerifyCodeComponent: React.FC<IVerifyCodeProps> = ({ onClick }: IVerifyCodeProps) => {
    const inputCode = useInput('');

    const sendCodeHandler = () => {
        const code = inputCode.value;

        onClick(code);
    };

    return (
        <form className="verifyCode__form" onSubmit={sendCodeHandler}>
            <InputComponent
                id="input-code"
                type="text"
                name="Code"
                value={inputCode.value}
                onChange={inputCode.onChange}
            />

            <ButtonComponent
                id={'button-code'}
                type={'submit'}
                text={'Send Code'}
                onClick={sendCodeHandler}
            />
        </form>
    );
};
