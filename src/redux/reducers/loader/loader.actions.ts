import { ILoaderActionCreator } from './loader.interface';
import { LOADER_TYPE } from './loader.type';

export const showLoader = (): ILoaderActionCreator => ({
    type: LOADER_TYPE.SHOW_LOADER,
});

export const hideLoader = (): ILoaderActionCreator => ({
    type: LOADER_TYPE.HIDE_LOADER,
});
