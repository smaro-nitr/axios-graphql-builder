interface Param {
    key: string;
    param: string;
}
export declare const buildQuery: (jsonInput: any, paramList?: Param[] | undefined) => {
    query: string;
};
export {};
