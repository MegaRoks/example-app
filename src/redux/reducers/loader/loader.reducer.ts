import { ILoaderActionCreator, ILoaderState } from './loader.interface';
import { LOADER_TYPE } from './loader.type';

const initialState: ILoaderState = {
    isLoader: false,
};

export const loaderReducer = (
    state: ILoaderState = initialState,
    action: ILoaderActionCreator,
): ILoaderState => {
    switch (action.type) {
        case LOADER_TYPE.SHOW_LOADER:
            return { ...state, isLoader: true };
        case LOADER_TYPE.HIDE_LOADER:
            return { ...state, isLoader: false };
        default:
            return state;
    }
};
