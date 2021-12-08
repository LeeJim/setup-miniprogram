interface IOptions {
    babelRoot: string;
    code: string;
    filePath: string;
    disableUseStrict?: boolean;
    inputSourceMap?: import('source-map').RawSourceMap;
}
declare const enhance: (options: IOptions) => {
    error: {
        message: string;
        code: number;
    };
    code?: undefined;
    map?: undefined;
    helpers?: undefined;
} | {
    code: string;
    map: import("source-map").RawSourceMap;
    helpers: string[];
    error?: undefined;
};
export = enhance;
