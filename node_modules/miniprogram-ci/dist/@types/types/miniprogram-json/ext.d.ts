import { AppJSON } from './app';
export declare namespace ExtJSON {
    interface IExtJSON {
        extEnable?: boolean;
        extAppid?: string;
        directCommit?: boolean;
        extPages?: {
            [pagePath: string]: AppJSON.IWindowConfig;
        };
        ext?: any;
        __warning__?: any;
    }
}
