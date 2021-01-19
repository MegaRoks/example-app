import { ISendCodeActionCreator, ISendCodeState } from './sendCode.interface';
import { SEND_CODE } from './sendCode.type';

const initialState: ISendCodeState = {
    code: null,
};

export const sendCodeReducer = (
    state: ISendCodeState = initialState,
    action: ISendCodeActionCreator,
): ISendCodeState => {
    switch (action.type) {
        // case SEND_CODE.SEND_CODE:
        //     return { ...state, code: action.payload.code };
        default:
            return state;
    }
};
