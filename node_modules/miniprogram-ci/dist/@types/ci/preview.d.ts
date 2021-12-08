import { TPluginInfo, TSubPackageInfo, IInnerUploadOptions } from './upload';
interface IPreviewOptions extends IInnerUploadOptions {
    test?: true;
}
export interface IPreviewResult {
    subPackageInfo?: TSubPackageInfo;
    pluginInfo?: TPluginInfo;
}
export declare function preview(options: IPreviewOptions): Promise<IPreviewResult>;
export {};
