"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = function (jsonInput) {
    var queryString = JSON.stringify(jsonInput);
    var modfiedQueryString = queryString
        .replace(/:null/g, '')
        .replace(/,/g, ' \n ')
        .replace(/:{/g, ' { \n ')
        .replace(/"/g, '')
        .replace(/}/g, ' \n }');
    var slicedQueryString = modfiedQueryString.slice(1, modfiedQueryString.length - 1);
    var axiosBasedQuery = { query: slicedQueryString };
    return axiosBasedQuery;
};
