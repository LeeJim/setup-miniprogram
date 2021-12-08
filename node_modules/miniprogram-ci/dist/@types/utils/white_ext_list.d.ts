export declare const MiniProgramWhiteList: string[];
export declare const GameWhiteList: string[];
export declare function getWhiteExtList(): Promise<{
    GameWhiteList: Set<string>;
    MiniProgramWhiteList: Set<string>;
}>;
