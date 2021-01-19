export interface ISendCodeState {
    readonly code: string | null;
}

export interface ISendCodeActionCreator {
    readonly type: string;
    readonly payload: string | null;
}
