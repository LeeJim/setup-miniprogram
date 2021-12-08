declare const _default: {
    name: string;
    pre(file: any): void;
    visitor: {
        MemberExpression: {
            enter(path: any): void;
        };
    };
};
export default _default;
